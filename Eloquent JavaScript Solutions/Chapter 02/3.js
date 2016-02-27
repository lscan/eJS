//this function creates a square chess board
//choose your board size below
(function() {
	//how large of a board do you want?
	var size = 20;
 	//define board
 	var board = '';
	for(var i=0; i<size; i++) {
		//define line within each iteration of our loop
		//this iterates for as many lines as we have
		//by declaring it here we're just resetting it each time
		var line = '';
		//if line number is odd
		if(i%2!=0) {
			//new loop for characters in our odd-numbered line
			for(var x=0; x<size; x++) {
				//if odd
				if(x%2!=0) {
					//add space
					line+=' ';
				}
				//if even
				else {
					// add #
					line+='#';
				}
			}
		}
		//if line number is even
		else {
			//new loop for characters in our even-numbered line
			for(var y=0; y<size; y++) {
				//if odd
				if(y%2!=0) {
					//add #
					line+='#';
				}
				//if even
				else {
					//add space
					line+=' ';
				}
			}
		}
		//add our line and a line break to the board
		board += line + '\n';
	}
	//log the whole board
	console.log(board);
})();