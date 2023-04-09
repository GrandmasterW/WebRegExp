/**
 * 
 */

"use strict";

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

function htmlOutput(outelem, s) {
	document.getElementById(outelem).innerHTML = s; 
}

function makeTd(s) {
    return "<td>"+s+"</td>";
}

function makeTr(s) {
    return "<tr>"+s+"</tr>";
}

function makeTable(s,c,fr) {
    return "<table class='" +c + "' >\n"+
	fr
	+ s + "\n"
	+ "</table>";
}
