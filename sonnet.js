//Take the contents of the sonnet 
//div and place it in a variable.

const sonnet = document.getElementById('sonnet');
let sonnetText = sonnet.innerHTML;


console.log("sonnet", sonnetText);

//Find and output the starting position
//of the word "orphans".

var orphanIndex = sonnetText.indexOf('orphans');

console.log("orphanIndex", orphanIndex);

//Output the number of characters in 
//the sonnet.

var sonnetLength = sonnetText.length;
console.log ("sonnetlength", sonnetLength);


//Replace the first occurence of the 
//string "winter" with "yuletide".

var sonnetUpdate = sonnetText.replace("winter", "yuletide");
console.log("changed text", sonnetUpdate);

//Replace all occurances of the 
//string "the" with "a large".

//regex
//g for global, forward slashes for what you want it 
//to look for everywhere, and spaces matter- be literal.
sonnetUpdate = sonnetUpdate.replace(/ the /g, " a large ");
console.log("sonnetUpdate", sonnetUpdate);

//Set the content of the sonnet div 
//with the new string.

sonnet.innerHTML = sonnetUpdate;



