/**
 * 
 */

"use strict";

/* 
 * helpers
 */

function arrayFirst(arr) {
    return arr.slice(0,1);
}

function arrayButFirst(arr) {
    return arr.slice(1);
}

function arrayButLast(arr) {
    return arr.slice(0,(arr.length - 1));
}

function arrayLast(arr) {
    return arr.slice(-1);
}

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

function makeTextarea(s) {
    return "<textarea disabled>" + s + "</textarea>";
}

function makeTd(s) {
    return "<td>"+s+"</td>";
}

function makeTr(s) {
    return "<tr>"+s+"</tr>";
}

function makeTable(s,c,fr) {
    return "<table class='" +c + "' >\n<thead>\n"
	+ fr
	+ "</thead>\n<tbody>\n"
	+ s + "\n</tbody>\n"
	+ "</table>\n";
}
