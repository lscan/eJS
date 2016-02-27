// Your code here.

function countBs(word) {
	var count = 0;
	for(var i = 0; i<word.length; i++) {
		if(word.charAt(i) == 'B') {
			count += 1;
		}
	}
	return count;
}

function countChar(word, letter) {
	var count = 0;
	for(var i = 0; i<word.length; i++) {
		if(word.charAt(i) == letter) {
			count += 1;
		}
	}
	return count;	
}

/*
Or...
function countBs(word) {
	return countChar(word, 'B');
}
*/

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4