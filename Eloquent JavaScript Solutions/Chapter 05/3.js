//output average age of ancestors by century
//century is determined by Math.ceil(person.died/100)

//to find an average
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//Historical Life Expectancy func
function HLE() {
	//declare vars!!
	var c16 = [];
	var c17 = [];
	var c18 = [];
	var c19 = [];
	var c20 = [];
	var c21 = [];
	var whichCentry;
	var ageAtDeath;
	//average func to be used later
	function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	}
	//loop through ancestors
	for(var i=0; i<ancestry.length; i++) {
		//store the ancestor's age at death
		ageAtDeath = (ancestry[i].died - ancestry[i].born);
		//determine and store which century the ancestor belongs to
		whichCentry = Math.ceil(ancestry[i].died/100);
		//based on which century of death, push the age at death into that century's array
		if (whichCentry == 16) {
			c16.push(ageAtDeath);
		}
		else if(whichCentry == 17) {
			c17.push(ageAtDeath);
		}
		else if(whichCentry == 18) {
			c18.push(ageAtDeath);
		}
		else if(whichCentry == 19) {
			c19.push(ageAtDeath);
		}
		else if(whichCentry == 20) {
			c20.push(ageAtDeath);
		}
		else if(whichCentry == 21) {
			c21.push(ageAtDeath);
		}
	}
	//log the average age of death for each century by using the average age func
	console.log(average(c16));
	console.log(average(c17));
	console.log(average(c18));
	console.log(average(c19));
	console.log(average(c20));
	console.log(average(c21));
}

//bonus points!
//wtf is it asking for? I can map the arrays, but what does it want?
//no bonus points :(