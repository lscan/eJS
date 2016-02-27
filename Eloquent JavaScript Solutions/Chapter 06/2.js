//create an interface for a cell that conforms to the table cell interface discussed in this chapter
//it should wrap another cell and ensure that the resulting cell has at least the given height and width

//re-use repeat function for adding underlines
function repeat(string, times) {
	var result = "";
	for(var i=0; i<times; i++)
		result += string; return result;
}

//our interface from this chapter for TextCells
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for(var i=0; i<height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};

//our new interface for StretchCells
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
//this returns whichever is larger, the StretchCell's or the TextCell's width
//because the StretchCell contains the Textcell, so it needs to be at least as wide
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
}
//add 1 for the row of underlines
StretchCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
}
//method to draw the StretchCell
//returns the amount of rows (height) (- 1 because 0-indexing) and the amount of dashes in width
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1)
	.concat([repeat("-", width)]);
}