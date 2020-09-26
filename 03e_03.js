function isEven(number){
	let k= number-2;
	
	if (k>=0){
		if (k === 0) {
			return true;
		} else if (k === 1){
				return false;
		} else {
			return isEven(k);
		}
	}
	
	else {
		k = -k;
		if (k === 0) {
			return true;
		} else if (k === 1){
				return false;
		} else {
			return isEven(k);
		}
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
