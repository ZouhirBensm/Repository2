function countBs(string){
	let count = 0;
	for (n=0; n< string.length; n++){
		if (string[n]== 'B') {count++;}
	}
	return count;
}

console.log(countBs("BBBssB"));

function countChar(string,char){
	let count = 0;
	for (n=0; n< string.length; n++){
		if (string[n]== char) {count++;}
	}
	return count;
}

console.log(countChar("ZZZzzzz",'z'));