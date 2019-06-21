// Exercise 10: Files, Args, Variables, Oh My

// const fs = require('fs');

// let file_to_open = process.argv[2];
// let file_contents = fs.readFileSync(file_to_open);

// console.log(`The file named ${file_to_open} contains:`);
// console.log(file_contents.toString());

const fs = require('fs');

let file_to_open = process.argv[2];

try {
    let file_contents = fs.readFileSync(file_to_open);
    console.log(`The file named ${file_to_open} contains:`);
    console.log(file_contents.toString());
}
catch(error) {
    console.error(error);
}


