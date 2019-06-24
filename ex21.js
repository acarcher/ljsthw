// data about a person named Frank
let frank = {
    name: "Frank",
    age: 34,
    eyes: "blue"
}

const frank_talk = (who, words) => {
    console.log(`I am ${who.name} and ${words}.`);
}

frank_talk(frank, "I am talking here!");

// working with that data by putting functions on it
let mary = {
    name: "Mary",
    age: 44,
    eyes: "brown",
    talk: (who, words) => {
        console.log(`I am ${who.name} and ${words}.`);
    }
}

// this is kind of annoying though
mary.talk(mary, "these are some words");
// and this works but that's weird
mary.talk(frank, "I am frank what?");

// we need a way to build these automatically
const Person = (name, age, eyes) => {
    // this makes an obj for the data
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }

    // then attach our function to it
    obj.talk = (words) => {
        // coolest part is obj here will keep a reference
        console.log(`I am ${obj.name} and ${words}.`);
    }

    // and return our new person
    return obj;
}

// let's use that to make someone named alex
let alex = Person("Alex", 16, "green");
// and see how they can talk without repetition?
alex.talk("Hi there!");