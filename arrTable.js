/**
 * converting the array into a table. Specific to our web page anyway. 
 */

"use strict";

const headerRow = "<th>i</th> <th>Input</th> <th>Search for</th> <th>Modifier</th> <th>Replace with</th> <th>Result</th>";

/*
  converts one logarr entry to a string of <td>x</td> strings, concatenated with blank
*/
function oneRow(value,index,array) {
    // each element of the output array is an array itself
    return makeTr(
	makeTd(
	    (array.length-index).toString())
	    + value.map(makeTd).join(" "));
}

/*
  prints the whole log array as a table of rows
*/
function arrToTable(myarr) {
    const omt =
	  makeTable(
	      myarr.map(oneRow).join("\n"), // without explicit join, JS will use a comma
	      "rtable", // style 
	      headerRow); //first row
    return omt;
}

 




