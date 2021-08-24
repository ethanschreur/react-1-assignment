function addCommas(num) {
	const numString = num.toString();
	const length = numString.length;
	let newString = '';
	let last;
	for (let k = 1; k <= length; k++) {
		if (k % 3 == 0) {
			last = k;
			newString = ',' + numString.substring(length - k, length - k + 3) + newString;
		}
		if (k === length && k % 3 != 0) {
			newString = numString.substring(0, length - last) + newString;
		}
	}
	if (newString.substring(0, 1) === ',') {
		return newString.substring(1);
	}
	if (last === undefined) {
		return numString;
	}
	return newString;
}
module.exports = addCommas;
