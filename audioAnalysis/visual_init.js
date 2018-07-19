import { makeAnalyserNode } from './m_audio.js';

// audio api stuff
const audioCtx = new window.AudioContext;
const analyserSize = 32;
let analyserNode = makeAnalyserNode(audioCtx, analyserSize*2);
// create an array for received analysis data to be stored
var receivedData = new Uint8Array(analyserSize);

// worker stuff
const analysisWorker = new Worker('workers/w_analysis.js');
// put message sending into a function, just to make sure it happens after we receive data...
function sendMessageToWorker() {
  analysisWorker.postMessage({'freqs': receivedData, 'newCounts': analyserSize});
}

// set draw after stream has started
function getStreamData() {

  // pipe in analysing to getUserMedia
  return navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => audioCtx.createMediaStreamSource(stream))
    .then(source => {
      source.connect(analyserNode);
    });
}
getStreamData().then(draw);

// run at 30 fps
let renderFrame = true;

// draw function (all request animation frame stuff)
function draw() {
  requestAnimationFrame(draw);

  if (renderFrame) {
    renderFrame = false;

    // get frequency data
    analyserNode.getByteFrequencyData(receivedData);
    // console.log(receivedData);
    sendMessageToWorker();

    // here is really where I want the worker to be posting messages - but for now see below
  } else {
    renderFrame = true;
  }

}

// once we've received the message back, show it so we know it's working
const result = document.querySelector('#result');
analysisWorker.onmessage = function(e) {
  result.innerHTML = e.data;
}






