/**
 * Main processing stuff for dealing with regexp in JS and setting results into the web page
 */

"use strict";

const intext = "intext";
const stext = "stext";

const global = "global";
const ignorecase = "ignorecase";
const multiline  = "multiline";

const rtext = "rtext";
const restxt= "resultarea";
const otext = "otext";

// a global variable - no other way? 
let outarr = [];


/*
  specific helpers
*/

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
    const tinput    = getValue(intext);
    const tsearch   = getValue(stext);

    const tglobal   = getCBValue(global);
    const tignore   = getCBValue(ignorecase);
    const tmultiline= getCBValue(multiline);

    const tmodifier = tglobal + tignore + tmultiline; 
    const treplace  = getValue(rtext);
    const result    = convert(tinput, tsearch, tmodifier, treplace);

    const logarr    = [tinput, tsearch, tmodifier, treplace, result];

    outarr.push(logarr); // not in a functional style here...
    
    // only output from here 
    setValue(restxt, result); // display single value in textarea
    log(outarr);
    htmlOutput(otext, arrToTable(outarr.reverse()));
}
/*
 * Main if any after this one
 */
 




