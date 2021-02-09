// Entscheidungsstrukturen | control structures

/*
// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark); // zB. 30 > 30
isJohnEqual = (ageJohn == ageMark); // zB. 30 = 30

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("-------------------");
*/

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
// mit Alternative  (ja oder nein)
/*
if (isJohnOlder) 
{ // Ja-Zweig | true
    console.log("John ist älter!"); 
} 
else 
{ // Nein-Zweig | false
    console.log("John ist jünger!");
}
*/

/************ IF - ELSE IF  ************/
// mit Alternativen Fällen (älter,jünger,gleich alt)

/*
if (isJohnOlder) 
{ // Ja-Zweig | true
    console.log("John ist älter!"); 
} 
else if (isJohnEqual) 
{ // 2. Ja-Zweig | true
    console.log("John ist gleich alt!"); 
} 
else 
{ // Nein-Zweig | false
    console.log("John ist jünger!");
}
*/

/************  Ternäre Schreibweise ************/
//console.log((isJohnOlder) ? "John is older" : "Mark is older");


/****** Fallunterscheidung / CASE|SWITCH 1 ******/

let firstName, job;
firstName = "Jane";
job = "driver";  // .. fährt TAXI!
job = "diver"; // .. taucht im Rhein!
job = "artist"  // .. malt ein Bild!
job = "pilot"  // .. macht etwas anderes.
job = "teacher" // .. unterrichtet.
job = "instructor" //  .. unterrichtet.


switch (job) 
{
    case "driver":
        console.log(firstName + " fährt TAXI.");
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein.");
        break;
    case "artist":
        console.log(firstName + " malt ein Bild.");
        break;
    case "teacher":
    case "instructor":
        console.log(firstName + " unterrichtet.");
        break;
        // für alle nicht bezeichneten Fälle ...
        default: 
        console.log(firstName + " macht etwas anderes.");
        break;
}
