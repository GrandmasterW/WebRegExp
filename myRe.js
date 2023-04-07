/**
 * 
 */

"use strict";

const 	intext = "intext";
const	stext = "stext";
const	modif = "mod";
const	rtext = "rtext";
const 	otext = "otext";
const 	osep  = " | ";

// a global variable - no other way? 
let outarr = [];

/* 
 * helpers
 */
function log(s) {
	console.log(s);
}

function getValue(element) {
	return document.getElementById(element).value;
}

function setValue(element, v) {
	document.getElementById(element).value = v;
}

function output(outelem, s) {
	document.getElementById(outelem).innerHTML = s; 
}

/*
  specific helpers
*/
function outOne(value, index, array) {
    // each element of the output array is an array itself
    return index.toString() + osep + value.join(osep) + "<br/>";
}

function printAll(myarr) {
    const omt =  myarr.map(outOne).join(" "); // without explicit join, JS will use a comma
    output(otext,omt);
}

function convert(tIn, tSearch, tMod, tRepl) {
	let pattern = new RegExp(tSearch, tMod);
	const tResult = tIn.replace(pattern, tRepl);
	return tResult;
}

function process() {
	const tinput 	= getValue(intext);
	const tsearch 	= getValue(stext);
	const tmodifier = getValue(modif);
	const treplace  = getValue(rtext);
	const result 	= convert(tinput, tsearch, tmodifier, treplace);
	const logarr 	= [tinput, tsearch, tmodifier, treplace, result];
		
    outarr.push(logarr);
    printAll(outarr);
}
/*
 * Main
 */
 




