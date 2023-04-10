/**
 * converting the array into a table. Specific to our web page anyway. 
 */

const headerRow = "<tr><th>i</th> <th>Input</th> <th>Search for</th> <th>Modifier</th> <th>Replace with</th> <th>Result</th></tr>";

/*
  converts one logarr entry to a string of <td>x</td> strings, concatenated with blank
*/
function oneRow(value,index,array) {
    // each element of the output array is an array itself
    const indStr      = makeTd((array.length-index).toString());
    const inputStr    = makeTd(makeTextarea(arrayFirst(value)));    // treat input as textearea 
    const resultStr   = makeTd(makeTextarea(arrayLast(value)));  // treat last one differently as textarea
    const valStr      = arrayButLast(arrayButFirst(value)).map(makeTd).join(" ");    // everything before result
    
    return makeTr(indStr + inputStr + valStr + resultStr); 
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
