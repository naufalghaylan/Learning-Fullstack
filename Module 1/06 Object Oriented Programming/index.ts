// const car = {
//     brand : "Denza",
//     price : 25000,
//     model : "EV",
//     changeCarBrand(newBrand:string){
//         this.brand = newBrand;
//     },
// };

// console.log(car);
// console.log(car.brand);
//     // car.changeCarBrand("Tesla")
//     // console.log(car.brand);
//     // delete car.price
//     // console.log(car);
// car.price = 50;
// console.log(car);
// car.color = "red";

// for (let key in car){
//     console.log(`testestes ${key}: ${car[key]}`);
    
// }

interface IUser  {
    name:string;
    address: {
        street:string;
        city:string;
        country:string;
    };
    greet?:() => void
}

const user:IUser = {
    name:"Alice",
    address: {
        street: "123 main street",
        city: "Wonderland",
        country: "Fictionland",
    },
    greet(){
        console.log(`Hello, my name is ${this.name}`);
        
    }
}

const user2:IUser = {
    name:"Budi",
    address: {
        street: "456 side street",
        city: "Jakarta",
        country: "Indonesia",
    },
    greet(){
        console.log(`Hello, my name is ${this.name}`);
        
    },
};

user.greet?.();
user2.greet?.();




// const {address} = user;
// console.log(address.country);


// console.log(user);
// console.log(Object.keys(user));

// const user1= user;
// const user2= {...user};
// user1.name = "bob";

// user2.name ="charlie"
// console.log(user.name, user2.name);

// let nama = "david"
// let anotherNama = nama;
// nama = "eve"
// console.log(nama, anotherNama);



let a,b;
[a,b] = [10,20];
let c,d;
({c,d} = {c:30, d:40})
console.log(a,b);
console.log(c,d);

const functionArray = [() => 1, () =>2, () =>3];
const [f2,f3] = functionArray;
console.log(f2!());
console.log(f3!());

const arraySorters = () => {
    const sortNumber = (arr:number[]):number[] => {
        return arr.sort((a,b) => a-b)
    };
    const sortString = (arr:string[]):string[] => {
        return arr.sort();
    };
    return {sortNumber, sortString};
}


const {sortNumber, sortString} = arraySorters()

console.log(sortNumber([5,3,8,1,2]));
console.log(sortString(["bannaa","apple","chery","date"]));




interface Tvector2 {
    x:number;
    y:number;
}

interface Tvector3 extends Tvector2 {
    z: number
}

const playerPosition3D: Tvector3 = {
   x: 10,
   y: 20,
   z: 30
}

// interface IBaseStats{

    
//     takeDamage:(damage:number) => void;
//     heal:(amount:number) => void;
//     attack:(target:Player, damage:number) => void;
// }

// abstract class BaseCharacter {
//     private name:string;
//     private health:number;
//     private job:string;
//     constructor (
//         name:string, health:number, job:string
//     ) {
//         this.name = name
//         this.job = job
//         if (health >= 100) {
//             this.health=100
//             return
//         } this.health = health
//     }
//     displayStats() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Health: ${this.health}`);
//         console.log(`Job: ${this.job}`);
//     };
// }
// class Player extends BaseCharacter implements IBaseStats {
//     name:string;
//     health:number;
//     job:string;
//     constructor(
//         name:string, health:number, job:string
//     ) {
//         this.name = name
//         this.job = job
//         if(health >= 100) {
//             this.health=100
//             return
//         }
//         this.health = health
//     }
//     displayStats():void {
//         console.log(`Name: ${this.name}`);
//         console.log(`Health: ${this.health}`);
//         console.log(`Job: ${this.job}`);
//     }
//     takeDamage(damage:number):void {
//         this.health -= damage
//         if  (this.health < 0) {
//             this.health = 0
//         }
//     }
//     heal(amount:number):void {
//         this.health += amount
//         if (this.health > 100) {
//             this.health = 100
//         }
//     }
//     attack(target:Player, damage:number):void {
//         console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
//         target.takeDamage(damage)
//     }   
// }

// class enemy implements IBaseStats {
//     name:string;
//     health:number;
//     job:string;
//     constructor(
//         name:string, health:number, job:string
//     ) {
//         this.name = name
//         this.job = job
//         if(health >= 100) {
//             this.health=100
//             return
//         }
//         this.health = health
//     }
//     displayStats():void {
//         console.log(`Name: ${this.name}`);
//         console.log(`Health: ${this.health}`);
//         console.log(`Job: ${this.job}`);
//     }
//     takeDamage(damage:number):void {
//         this.health -= damage
//         if  (this.health < 0) {
//             this.health = 0
//         }
//     }
//     heal(amount:number):void {
//         this.health += amount
//         if (this.health > 100) {
//             this.health = 100
//         }
//     }
//     attack(target:Player, damage:number):void {
//         console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
//         target.takeDamage(damage)
//     }   
// }

// const player1 = new Player("Hero", 100, "Warrior");
// const player2 = new Player("Villain", 80, "Mage");



class Animal {
    name:string;
    constructor(name:string) {
        this.name = name
    }
    makeSound():void {
        console.log("Generic Noises");
        
    }
}

class Dog extends Animal{
    breed: string;
    constructor(name:string, breed:string){
        super(name);
        this.breed = breed
    }
    makeSound(): void {
        console.log("Woof Woof");
        
    }
}

