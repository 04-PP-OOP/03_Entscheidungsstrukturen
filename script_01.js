// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 30;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark); // zB. 30 > 30
isJohnEqual = (ageJohn == ageMark); // zB. 30 = 30

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("-------------------");

/************ IF  ************/
// alternativlos (TINA)

/** 
//if (true) 
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (55 > 30) 
{
    console.log("John ist älter!");
}
*/

/************ IF - ELSE  ************/
// mit Alternative

if (isJohnOlder) 
{ // Ja-Zweig | true
    console.log("John ist älter!"); 
} 
else 
{ // Nein-Zweig | false
    console.log("John ist jünger!");
}