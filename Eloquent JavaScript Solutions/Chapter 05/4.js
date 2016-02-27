//func that behaves like the every() method:
//every() is like && . it returns true if all array elements return true
function every(array, funk) {
	var check = 0;
	for(var i=0; i<array.length; i++) {
		if( funk(array[i]) == false) {
			check+=1;
		}
	}
	if(check >= 1) {
		return false;
	} else if(check == 0) {
		return true;
	}
}

//func that behaves like the some() method:
//some() is like || . it returns true if any array elements return true
function some(array, funk) {
	var check = 0;
	for(var i=0; i<array.length; i++) {
		if( funk(array[i]) == true) {
			check+=1;
		}
	}
	if(check >= 1) {
		return true;
	} else if(check == 0) {
		return false;
	}
}


//note: so I did this really quickly, but passed the tests. this could (and probably should) be cleaned up though.
//for example, the some() function should stop after any one of the elements is true
//conversely, the every() function should stop after any one of the elements is false
//however, I'm letting the loop finish. maybe a while loop would correct this?
// ¯\_(ツ)_/¯   maybe I'll come back to this...