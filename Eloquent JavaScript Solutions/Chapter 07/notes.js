//an array of strings that lays out the world’s grid using one character per square
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x+other.x, this.y+other.y);
};


//grid object (which is separate from the world object)
//this will also be a property of the world object

//we need to store grid object values
//option 1: array of row arrays, then use 2 prop accesses to get a grid square
// var grid = [["top left", "top middle", "top right"],
// 			["bottom left", "bottom middle", "bottom right"]];
// console.log(grid[1][2]);
//option 2: 1 array w/ size width x height
//so element at (x,y) is actually at x + y(y*width)
// var grid = ["top left", "top middle", "top right",
// 			"bottom left", "bottom middle", "bottom right"];
// console.log(grid[2 + (1 * 3)]);

//grid constructor and methods
function Grid(width, height) {
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
}
Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
		   vector.y >= 0 && vector.y < this.height;
}
Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width * vector.y];
}
Grid.prototype.set = function(vector, value) {
	this.space[vector.x + this.width * vector.y] = value;
}

//some examples
// var grid = new Grid(5, 5);
// console.log(grid.get(new Vector(1, 1)));
// → undefined
// grid.set(new Vector(1, 1), "X");
// console.log(grid.get(new Vector(1, 1)));
// → X

//directions object
var directions = {
	"n":  new Vector( 0, -1),
	"ne": new Vector( 1, -1),
	"e":  new Vector( 1,  0),
	"se": new Vector( 1,  1),
	"s":  new Vector( 0,  1),
	"sw": new Vector(-1,  1),
	"w":  new Vector(-1,  0),
	"nw": new Vector(-1, -1)
};

//shit needed to create a critter that moves in a random direction
function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}
var directionNames = "n ne e se s sw w nw".split(" ");
function BouncingCritter() {
	this.direction = randomElement(directionNames);
};
BouncingCritter.prototype.act = function(view) {
	if (view.look(this.direction) != " ")
		this.direction = view.find(" ") || "s";
	return {type: "move", direction: this.direction};
};

//creating the world object
function elementFromChar(legend, ch) {
  if (ch == " ")
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

//the World constructor
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y),
               elementFromChar(legend, line[x]));
  });
}

function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
};

//simple object to take up space
function Wall() {}

//example
var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
console.log(world.toString());

//this essentially looks for undefined grid spaces and calls a function to them
Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null)
        f.call(context, value, new Vector(x, y));
    }
  }
};
