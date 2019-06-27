const readline = require('readline-sync');

class Game {
    constructor (rooms) {
        this.hp = Math.floor(Math.random() * 10) + 1;
        this.rooms = {}
        for(let room of rooms) {
            this.rooms[room.name] = room;
        }
    }

    say(prompt) {
        console.log(prompt);
    }

    die(message) {
        this.say(message);
        process.exit(1);
    }

    ask(prompt) {
        console.log(`[[You have ${this.hp} hit points.]]`);
        if(this.hp <= 0) {
            this.die("You died!");
        } else {
            return readline.question(prompt + ' ');
        }
    }

    go(where) {
        let room = this.rooms[where];
        return room.enter(this);
    }

    play(name) {
        let next_room = this.go(name);
        while(next_room) {
            next_room = this.go(next_room);
        }
    }

    hit(amount) {
        this.hp -= amount;
        if(this.hp <= 0) {
            this.die("You died from internal injuries.");
        }
    }
}

class Room {
    constructor (name) {
        this.name = name;
    }

    enter() {
        console.log("Implement me!");
    }
}

class Door extends Room {
    enter(game) {
        // they have to open the door to get the gold
        // what kind of puzzle will they solve?
    }
}

class Spider extends Room {
    enter(game) {
        // they enter here, and the spider takes 10 hit points
        // if they live then they can run away
    }
}

class Gold extends Room {
    enter(game) {
        //end of the game they win if they get the gold
    }
}

class Rope extends Room {
    enter(game) {
        // they are at the bottom of the well
        game.say("You are at the bottom of the well.");
        // they can go through the door to the gold
        return "well";
        // or go take a wrong turn to the spider
    }
}

class Well extends Room {

    enter(game) {

        game.say("You are walking through the woods and see a well.");
        game.say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = game.ask("What do you do?");

        if(next === "climb") {
            game.say("You climb down the rope.");
            return "rope";
        } else if(next === "jump") {
            game.say("Yikes! Let's see if you survive!");
            game.hit(5);
            return "rope";
        } else {
            game.say("You can't do that here.");
            return "well";
        }
    }
}

let rooms = [
    new Well("well"),
    new Rope("rope"),
    new Gold("gold"),
    new Spider("spider"),
    new Door("door")
]
let game = new Game(rooms);
game.play("well");