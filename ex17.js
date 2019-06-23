let pigments = ["perinone", "cadmium", "titanium", "ultramarine", "napthol"]

let i = 0;
// you've seen this already
while(i < pigments.length) {
    console.log(`while ${i}=${pigments[i]}`);
    i++
}

// you can do the above in one move like this
for(let i = 0; i < pigments.length; i++) {
    console.log(`for ${i}=${pigments[i]}`);
}

for(paint of pigments) {
    console.log(`for-of ${paint}`);
}