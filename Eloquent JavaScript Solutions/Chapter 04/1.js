// this function could use some validation but I don't feel like writing it
// it passes all of the exercise test
// otherwise, it sums a range, and takes an optional third argument for incrementation

function sum(start, end, step) {
	var rangeArray = [];
	var rangeSum = 0;
	if(step==undefined) {
		step=1;
	}
	if(end<start) {
		if(step<0) {
			step*=-1;
		}
		for(var i=end; i<start+1; i+=step) {
			rangeArray.push(i);
		}
	}
	else {
		for(var i=start; i<end+1; i+=step) {
			rangeArray.push(i);
		}
	}
	for(var i=0; i<rangeArray.length; i++) {
		rangeSum+=rangeArray[i];
	}
	return rangeSum;
}