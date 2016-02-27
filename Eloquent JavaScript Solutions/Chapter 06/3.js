//design an interface  that abstracts iteration over a collection of values
//an object of this interface represents a sequence
//the interface must make it possible for code that uses an this type of object to iterate over the sequence, looking
//...at the values and knowing when the end is reached
function Sequence(start, end) {
	this.start = start;
	this.end = end;
}
Sequence.prototype.difference = function() {
	return (this.end - this.start);
}

//now write a function logFive that takes a sequence object and calls console.log on its first five elements
//...or fewer if the sequence has less than 5 elements
function logFive(sequence) {
	for(var i = sequence.start; i < sequence.start+5; i++) {
		if(i > sequence.end) {
			return;
		}
		else {console.log(i);}
	}
}

//now implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface
function ArraySeq(array) {
	this.start = array.map(function() {
		return Math.max(array);
	});
	// this.end = ;
}
ArraySeq.prototype.difference = function() {
	return (this.end - this.start);
}

//implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to
//...its constructor) instead
function RangeSeq(from, to) {
	this.start = array[0];
	this.end = array[1];
}
RangeSeq.prototype.difference = function() {
	return (this.end - this.start);
}







function Sequence(object) {
	this.keys = Object.keys(object);
	this.numbers = this.map(function() {

	});
}

var test = {
	one: 1,
    two: 2,
    three: 3,
    four: 605
}