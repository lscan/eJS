//this function should return a new array that's a reverse of the original
function reverseArray(a) {
	var newA = [];
	for(var i=0; i<a.length; i++) {
		newA.unshift(a[i]);
	}
	return newA
}

//this function should return the original array, reversed
function reverseArrayInPlace(b) {
	var langth = b.length;
	for(var i=b.length-1; i>-1; i--) {
		b.push(b[i]);
	}
	b.splice(0, langth);
	return b;
}


//Thinking back to the notes about side effects and pure functions in the previous chapter,
//which variant do you expect to be useful in more situations?
//Which one is more efficient?

//the first function is fewer lines of code (by 1)
//it creates a new array though (which is local to its function, although it doesn't need to be)
//whereas the second does need another array variable. I would think #2 is more efficient because of this