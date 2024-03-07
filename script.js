/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log("23");

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';


let age = 30;
age = 31;

const birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Narciso';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const firstName = "Jonas";
const job = "teacher";
const year = 2037;
const birthYear = 1991;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

const age = 16;

if (age >= 18) {
    console.log(`Sarah can start driving license!`);
} else {
    const yearsLeft = 18 - age;
    console.log(`gtfo and come back in ${yearsLeft} years`);
}

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Type conversion (manually changing variable type)
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//Type coercion (Js automatically changing variable type)
console.log('I am ' + 23 + ' years old');
console.log('I am 23 years old');

console.log('23' - '10' - 3);
console.log (23 - 10 - 3);
//The + can coerce a number to turn into a string, the - can coerce a string to turn into a number. Not the other way around though.

let n = '1' + 1;
n = n - 1
console.log(n); //10

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 100;
if (money)
{
    console.log(`Don't spend it all ;)`);
}
else
{
    console.log(`You should get a job!`);
}

let height;
if (height)
{
    console.log(`YAY! Height is defined`);
}else
{
    console.log(`Height is UNDEFINED`);
}

const age = '18'; // 3 = means there's no type coercion, so it's strict. 2 = means JS will use type coercion. It's recommended to only use the 3 = because the latter has lots of weird rules.
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favorite = Number(prompt(`What's your favorite number?`));

console.log(favorite);
console.log(typeof favorite); //it's a string type

if (favorite === 226)
{
    console.log(`Cool! 226 is an amazing number!`)
}
else if (favorite === 7) 
{
    console.log(`7 is also a cool number`)
}
else
{
    console.log(`The number is not 226 or 7`)
}

if (favorite !== 226) console.log(`Why not 226?`)

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision)
// {
//     console.log(`Sarah is able to drive!`)
// }else
// {
//  console.log(`Someone else should drive...`)   
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired)
{
    console.log(`Sarah is able to drive!`)
}else
{
 console.log(`Someone else should drive...`)   
}


const day = `monday`;

switch(day)
{
    case `monday`: //strict comparison
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

if (day === `monday`)
{
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`)
{
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`)
{
    console.log(`Write code examples`);
} else if (day === `friday`)
{
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`)
{
    console.log(`Enjoy your weekend!`);
} else
{
    console.log(`Not a valid day!`);
}
*/