class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }
    growl() {
        console.log("grrrrrr!");
    }
}

// TODO 1
module.exports = Tiger;