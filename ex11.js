// Exercise 11: Functions

const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('---------- pets ----------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizard', 1);
printPet('Eve', 35, 'Kong The Donkey', 20);

// this part is tough! brain melting! give it a try
//
console.log('---------- callback style ------------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    // printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

// notice how I use a function here as the parameter cb?
fancyPet('Zed', 44, 'Mr. Scruffles', 10, (name, age) => {
    console.log(`Ooooh fancy ${name} you are ${age} old.`);
});