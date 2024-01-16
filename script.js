class formaDeHero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    atack() {
        if (this.type === "mago") {
            console.log(`O ${this.type} atacou uasando magia`)
        } else if (this.type === "guerreiro") {
            console.log(`O ${this.type} atacou uasando espada`)
        } else if (this.type === "monge") {
            console.log(`O ${this.type} atacou uasando artes marciais`)
        } else if (this.type === "ninja") {
            console.log(`O ${this.type} atacou uasando shuriken`)
        } else {
            console.log("Sorry princess, there's no such thing around here! Type it again, would you..?")
        }
    }
}

let felipaoDaHero = new FormaDeHero("Felipão", 72, "ninja")
felipaoDaHero.atack()
