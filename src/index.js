class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }

    tostring(){
        if(this.type === "Mago"){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
        }else if(this.type === "Guerreiro"){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
        }else if(this.type === "Monge"){
        console.log(`O ${this.type} atacou usando ${this.attack}`)    
        }else if(this.type === "Ninja"){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
        }
    }
}

let sylvarus = new hero("Sylvarus", 75, "Mago", "Magia")
let adam = new hero("Adam", 32, "Guerreiro", "Espada")
let liShenzhi = new hero("Li Shenzhi", 55, "Monge", "Artes Marciais")
let hikari = new hero("Hikari", 29, "Ninja", "Shuriken")

sylvarus.tostring()
adam.tostring()
liShenzhi.tostring()
hikari.tostring()