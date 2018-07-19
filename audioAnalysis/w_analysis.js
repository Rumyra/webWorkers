let newAr = [], givenArr = [];

onmessage = function(e) {
	givenArr = e.data.freqs;

	newAr = alterArr(givenArr);
	postMessage(newAr);
}

function alterArr(arrToChange) {
	let changedArr = arrToChange.map(function(el,i) {
		return el*2;
	})
	return changedArr;
}

