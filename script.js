// 1
console.log('-------------------');

for (i = 1; i <= 7; i++){
    console.log(i);
};

console.log('-------------------');

// 2
for (i = 5; i <=25; i += 4){
    console.log(i);
};

console.log('-------------------');

// 3a
const wizards = [
    'Harry Potter', 
    'Hermione Granger', 
    'Ron Weasley'
];
console.log(wizards);

console.log('-------------------');

// 3b
// For Of Loop
for (list of wizards){
    console.log(list);
};
// ^^^^^^^^^^^
// For Loop
/*
for (i = 0; i < wizards.length; i++){
    console.log(wizards[i]);
};
*/

console.log('-------------------');

// 4a
let harryPotterMovies = 0

console.log('-------------------');

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
};

console.log('-------------------');

// 4c
console.log(harryPotterMovies);

console.log('-------------------');

// BONUS
// 5a
const hogwartsHouses = [
    'Hufflepuff',
    'Gryffindor',
    'Ravenclaw',
    'Slytherin'
];

console.log('-------------------');

// 5b
for (list of hogwartsHouses) {
    for (letters of list) {
        console.log(letters);
    }
    console.log('~*~*^^!@$$~~**');
};

console.log('-------------------');

// 6a
const quote = [
    "Yer",
    "a",
    "Wizard",
    "Harry"
];
console.log(...quote);

// 6b
// for (all = 0; all <= 0; all++){
//     console.log(quote.join(` `));
// }
    //    OR
let magicQuote = ` `;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

// 7
 // INSPIRED BY FizzBuzz

for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0){
        console.log(`Expecto`);
    } else if (i % 5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}