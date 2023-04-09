/**
 * 
 */

"use strict";

const intext = "intext";
const stext = "stext";
const modif = "mod";
const rtext = "rtext";
const restxt= "result";
const otext = "otext";
const osep  = " | ";
const headerRow = "<th>i</th> <th>input</th> <th>search</th> <th>modifier</th> <th>replace</th> <th>result</th>";

// a global variable - no other way? 
let outarr = [];


/*
  specific helpers
*/

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
function printAll(myarr) {
    const revOmt = myarr.reverse();
    const omt = makeTable(
	revOmt.map(oneRow).join("\n"), // without explicit join, JS will use a comma
	"rtable", // style 
	headerRow); //first row 
    log(omt);
    htmlOutput(otext,omt);
}

/*
  applies the regexp to the string
*/
function convert(tIn, tSearch, tMod, tRepl) {
	let pattern = new RegExp(tSearch, tMod);
	const tResult = tIn.replace(pattern, tRepl);
	return tResult;
}

/*
  overall process:
  1. get inputs
  2. convert
  3. log to outputs
*/
function process() {
	const tinput 	= getValue(intext);
	const tsearch 	= getValue(stext);
	const tmodifier = getValue(modif);
	const treplace  = getValue(rtext);
	const result 	= convert(tinput, tsearch, tmodifier, treplace);
	const logarr 	= [tinput, tsearch, tmodifier, treplace, result];

    htmlOutput(restxt, result);
    outarr.push(logarr);
    printAll(outarr);
}
/*
 * Main
 */
 




