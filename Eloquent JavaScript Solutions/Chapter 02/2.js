//this function conunts 1 to 100
//on multiples of 3 it logs Fizz
//on multiples of 5 it logs Buzz
//on multiples of both it logs FizzBuzz
(function() {
	//counter variable starts at 0
	var counter=0;
	//iterate through 100 times
	for(var i=0; i<100; i++) {
		//increase counter by 1 each time
		counter+=1;
		//for multiples of 3 and 5
		if(counter%3==0 && counter%5==0) {
			console.log('FizzBuzz');
		}
		//only for multiples of 3
		else if(counter%3==0) {
			console.log('Fizz');
		}
		//only for multiples of 5
		else if(counter%5==0) {
			console.log('Buzz')
		}
		//if none of those just log the counter
		else {console.log(counter);}
	}
})();