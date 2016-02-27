// Your code here.
function findMin(one, two) {
	if(one > two) {
		return one;
	}
	else if(two > one) {
		return two;
	}
	else {
		return "Neither is greater than the other";
	}
}




console.log(findMin(0, 10));
// → 0
console.log(findMin(0, -10));
// → -10