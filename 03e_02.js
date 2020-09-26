let test = -1;
let testString = test => String(test);

let isEven = function(number){
	if ((number%2)===0){
		return true;
		}
	else {return false;}
}

function reply(b){
	if (b===true){
		return " is even";
		}
	else {return " is odd";}
}

b = testString(test);

console.log(`${b}` + reply(isEven(test)));
