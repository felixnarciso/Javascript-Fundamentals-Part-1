/*
const country = "Argentina";
const continent = "South America";
let population = 46000000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'spanish';

const splitInHalf = population / 2;
population++;
console.log(splitInHalf);

let finlandPopulation = 6000000;

console.log(population > finlandPopulation);

let avgPopulation = 33000000;

console.log(population < avgPopulation);

const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionNew);

if (population > avgPopulation)
{
	console.log(`${country}'s population is ${(population - avgPopulation)} above average.'`);
} else
{
	console.log(`${country}'s population is ${(avgPopulation - population)} below average.'`);
}

console.log('9' - '5'); // -> 4 (4)
console.log('19' - '13' + '17'); // -> 617 ('617')
console.log('19' - '13' + 17); // -> 617 (23)
console.log('123' < 57); // -> NaN (false)
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 (1143)

numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1)
{
	console.log(`Only 1 border!`)
}
else if (numNeighbors > 1)
{
	console.log(`More than 1 border!`)
}
else
{
	console.log(`No borders`)
}


if (language === `english` && population < 50000000 && !isIsland)
{
	console.log(`You should live in ${country} ;D`)
} else
{
	console.log(`${country} does not meet your criteria :c`)
}


switch(language)
{
	case `chinese`:
	case `mandarin`:
		console.log(`MOST number of native speakers!`);
		break;
	case `spanish`:
		console.log(`2nd place in number of native speakers`);
		break;
	case `english`:
		console.log(`3rd place`);
		break;
	case `hindi`:
		console.log(`Number 4`);
		break;
	case `arabic`:
		console.log(`5th most spoken language`);
		break;
	default:
		console.log(`Great language too :D`);
}
*/