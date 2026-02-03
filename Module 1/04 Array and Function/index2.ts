function greet(name= "guest"){
    console.log(`HI ${name}`);
    
}
greet("Aline");

const greetings = greet();
console.log(greetings);

const add = (n1:number, n2:number):number => {
    return n1+n2;
}

console.log(add(1,1));
const sum = add(5,5)
console.log(sum);

const multiplyMany = (...numbers:number[]) => {
    return numbers.reduce((acc,curr)=> (acc *=curr), 1);
}

console.log(multiplyMany(1,2,3,4,5,6,7,8,9));

const isEven = (num:number):boolean => num% 2 ===0;

console.log(`${isEven(5) ? "genap" : "ganjil"}`);

const StringManipulator = (
    strings:string[] = ["apple", "banana", "cherry"], 
) => {
    strings.push("blackberry", "raspberry")
    const uppercased = strings.map((str) => str.toUpperCase() );
    strings.pop();
    return uppercased;
};

const registredUsers: string[]= ["john", "jane", "doe"]
const registeredPassword: string[]= ["john123", "jane123", "doe123"]

const signIn = (username:string, password:string) => {
    if (registredUsers.includes(username)){
        if (registeredPassword[registredUsers.indexOf(username)]=== password) {
            console.log(`Welcome back, ${username}`);
            
        }
    } else{
        console.log("Username or password is incorrect");
        
    }
}

const signUp = (username:string, password:string) => {
    if (registredUsers.includes(username)){
        console.log("username has already taken");
        
    } else {
        registredUsers.push(username);
        registeredPassword.push(password);
        console.log(`User ${username} has successfully registered`);
        
    }
}

//closure

const createMultiplier = (factor:number) : (num:number) => number => {
    return (num:number) => {
        return num / factor;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(createMultiplier(2));


console.log(triple(9));


// spread operator array
const arr1 : number[] = [1,2,3];
const arr2 : number[] = [4,5,6];
const combinedArr: number[] = [...arr1, ...arr2,7,8,9];
let combinedArr2: number[] = [-3,-2,-1,0,...arr1, ...arr2,7,8,9];
combinedArr2 = [
    ...combinedArr2.filter((num) =>num === Math.abs(num) && num !== 0 ),
];
combinedArr2 = [...combinedArr2]
console.log(combinedArr);
console.log(combinedArr2);


