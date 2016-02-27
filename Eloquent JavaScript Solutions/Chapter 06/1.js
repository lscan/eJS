//Vector constructor with x and y properties
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

//two new methods for Vector
//plus method to add current vector's coordinates with new vector's
Vector.prototype.plus = function(newVector) {
	this.x+=newVector.x;
	this.y+=newVector.y;
	return this;
}
//minus method to subtract new vector's coordinates from current vector's
Vector.prototype.minus = function(newVector) {
	this.x-=newVector.x;
	this.y-=newVector.y;
	return this;
}

//getter property length to computer vector's length ( distance of point (x,y) from origin (0,0) )
Object.defineProperty(Vector.prototype, "length", {
	get: function() {
		//you can use the Pythagorean Theorem to find the length of the hypotenuse
		return Math.sqrt( (this.x*this.x) + (this.y*this.y) );
	}
});