const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say("\n"+message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if(hp <= 0) {
        die("You died!");
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp) => {
    // they have to open the door to het the gold
    // what kind of puzzle will they solve?
    let combo = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();

    say("\nYou walk over to the door and notice it has a combination lock with 3 numbers.");
    let next = ask(hp, "What's the combination?");
    combo = "555";
    if(next === combo){
        say("As you enter the combination, you hear a satisfying *click* as the door unlocks.");
        gold(hp);
    } else {
        damage = Math.floor(Math.random() * 3);
        hp = hp - damage;
        say(`You fumble with the lock, hurting yourself for ${damage} damage.`);
        if(hp <= 0) {
            die("You collapse from fatigue in front of the door and die from starvation!");
        } else {
            door(hp);
        }
    }

}

const spider = (hp) => {
    // they enter here, and the spider takes 10 hit points
    // if they live then they can run away
    say("\nYou walk down the tunnel and into a giant spider's web.");
    say("The spider finds you and bites you.")
    damage = Math.floor(Math.random() * 10);
    hp = hp - damage;
    say(`You take ${damage} damage.`)
    if(hp <= 0) {
        die("You died to the spider!");
    } else {
        rope(hp);
    }
}

const gold = (hp) => {
    // end of the game, they win if they get the gold
    say("\nYou walk through the door into the room, and are dazzled by the brilliance.");
    say("As the brightness fades, you see three objects: a lamp, a gold brick, and a jeweled goblet.")
    let next = ask(hp, "What do you take?");
    if(next === "lamp") {
        say("Congrats, you won!");
        process.exit(0);
    } else {
        die("The room caves in on you and you die! Too bad!");
    }
}

const rope = (hp) => {
    // they are at the bottom of the well
    // they can go through the door to the gold
    // or go take a wrong turn to the spider

    say("\nYou are at the bottom of the well.");
    say("There is a tunnel on one side and a door on the other.");
    let next = ask(hp, "What do you do?");

    if(next === "door"){
        say("You approach the door.");
        door(hp);
    } else if (next === "tunnel") {
        say("You walk down the tunnel.");
        spider(hp);
    } else {
        say("You can't do that here.");
        rope(hp);
    }
}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// setup hit points
let hp = Math.floor(Math.random() * 10) + 5;

//this starts the game
well(hp)