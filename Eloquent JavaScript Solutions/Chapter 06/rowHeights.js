
//rows = array of arrays
//this func returns the height needed for the rows
function rowHeights(rows) {
	//map allows us to iterate through all rows
	return rows.map(function(row) {
		//reduce into one number that equals the height needed for the rows
		//this is the max height out of all rows
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

//this func returns the width needed for the columns
function colWidths(rows) {
	//we need to iterate through each row and map it
	return rows[0].map(function(_,i) {
		//reduce the row to a width
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

//func to draw the table of cells
function drawTable(rows) {
	
	var heights = rowHeights(rows);
	var widths = colWidths(rows);
	
	function drawLine(blocks , lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}
	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks , lineNo);
		}).join("\n");
	}
	return rows.map(drawRow).join("\n");
}


//constructor for cells that contain text
function repeat(string, times) {
	var result = '';
	for(var i=0; i<times; i++) 
		result += string; return result;
}

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

var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell(" "));
	}
	rows.push(row);
}
console.log(drawTable(rows));

//so everything above works because all of the cells are the same size
//what if we want actual data, like our mountains data set?

//data set
var mountains = [{
    name: "Kilimanjaro",
    height: 5895,
    country: "Tanzania"
}, {
    name: "Everest",
    height: 8848,
    country: "Nepal"
}, {
    name: "Mount Fuji",
    height: 3776,
    country: "Japan"
}, {
    name: "Mont Blanc",
    height: 4808,
    country: "Italy/France"
}, {
    name: "Vaalserberg",
    height: 323,
    country: "Netherlands"
}, {
    name: "Denali",
    height: 6168,
    country: "United States"
}, {
    name: "Popocatepetl",
    height: 5465,
    country: "Mexico"
}];

//we want to highlight the top row of cells, since these are the column labels
//to do this we need a new type of cell
//underlined cells contain other cells
//the min size of an underlined cell = same of inner cell (by calling through to that cell's minWidth and minHeight methods)
//however, it also adds 1, to account fot the space of the underline
function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};

//now we need to draw the underlined cells
//we take the content of the inerr cell, and concatenate a single line of dashes to it
//this func builds a grid of cells from our data set
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}
