//compute the average age difference between mothers and children
//aka mother's age at child's birth
function averageAge() {
	//declare some vars!
	var babyAge;
	var mother;
	var motherObj;
	var byName = {};
	var motherBirth;
	var motherAge = 0;
	var ageDifferences = [];
	//loop through each object in the ancestry object
	for(var i=0; i<ancestry.length; i++) {
		//get year of baby's birth
		babyAge = ancestry[i].born;
		//find name of baby's mother, then find age of mother at baby's birth
		mother = ancestry[i].mother;
		ancestry.forEach(function(person) {
			byName[person.name] = person;
		});
		// now we call it and get the mother object
		motherObj = byName[mother];
		//lastly, if not undefined (some objects have no mother property):
		//find when the mother was born. then subtract that from the baby's birth year to get the mother's age at baby birth
		//and push into an array
		if(motherObj != undefined) {
			motherBirth = motherObj.born;
			motherAge = (babyAge - motherBirth);
			ageDifferences.push(motherAge);
		}
	}
	//calculate average by reducing array into a sum, then dividing by its length
	function average(array) {
		function plus(a, b) { return a + b; }
		return array.reduce(plus) / array.length;
	}
	return average(ageDifferences);
}