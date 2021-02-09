// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark); // 30 > 30
isJohnEqual = (ageJohn == ageMark); // 30 = 30

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("-------------------");

/************ IF  ************/
// alternativlos (TINA)

//if (true) 
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (55 > 30) 
{
    console.log("John ist älter!");
}

