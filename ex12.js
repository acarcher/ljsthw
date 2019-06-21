// Exercise 12: Functions, Files, Variables

const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString());
}

const yell_at_me = (what) => {
    return what.toUpperCase();
}

fs.readFile("poem.txt", print_lines);

// let's do that again but with an anonymous function
// you've actually seen this before

fs.readFile("poem.txt", (err, data) => {
    let yelling = yell_at_me(data.toString());
    print_lines(err, yelling);
});