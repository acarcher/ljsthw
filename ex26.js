let pets = [
    {name: 'Yeller', type: 'Dog', age: 12},
    {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
    {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
    {name: 'James', type: 'Gecko', age: 2},
]

let ages_only = pets.map(pet => pet.age);

let total_age = ages_only.reduce((acc, age) => acc += age);

let meaw = pets.find(pet => pet.name == 'Meaw Peesard');

let old_animals = pets.filter(pet => pet.age > 10);
let young_animals = pets.filter(pet => pet.age <= 10);

console.log("Animal Ages:", ages_only);

console.log("Total Age:", total_age);

console.log("Meaw is:", meaw.age);

console.log("\nOld animals:");
old_animals.forEach(pet => {
    console.log(`\t${pet.name} is a ${pet.age} year old ${pet.type}.`);
});

console.log("\nYoung Animals:");
for(let pet of young_animals) {
    console.log(`\t${pet.name} is a ${pet.age} year old ${pet.type}.`)
}