// Your code here.
function isEven(n) {
	//for negative numbers. otherwise call stack is exceeded
	if(n<0) {
		return 'Please enter a positive number.'
	}
	//if n%2==0
	if(n==0) {
		return true;
	}
	//if n%2==1
	else if(n==1) {
		return false;
	}
	//else this function repeats itself
	else {
		n-=2;
		return isEven(n);
	}
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??