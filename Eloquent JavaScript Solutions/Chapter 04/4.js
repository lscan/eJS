function deepEqual(x, y) {
	if(x.value == undefined || y.value == undefined) {
		if(x == y) {
			return true;
		}
		else {return false;}
	}
	else if(x == y) {
		return true;
	}
	else {return false;}
}