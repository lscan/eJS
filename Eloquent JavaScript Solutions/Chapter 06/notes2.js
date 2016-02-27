//program that takes array of arrays to return string
//we need to ask each cell how wide and high it needs to be
//we then use this^ to determine the width of the columns and height of the rows
//cells draw themselves and assemble into a single string
//the cells are objects
//an interface allows our layout program to work with the cell objects
//through polymorphism we can add new styles to our cells later, so long as 
//... supported by interface

//the interface:

//minHeight() - returns a number that is the cell's min height
//minWidth() - returns a number that is the cell's min width (in characters)
//draw(width, height) - returns an array. array's length is height. array contains
//... a series of strings that are width chars wide. this is the content of the cell
