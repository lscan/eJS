//use reduce and concat methods to turn an array of arrays into one array
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce(function(previousValue, currentValue) {
	return previousValue.concat(currentValue);
});
console.log(arrays)