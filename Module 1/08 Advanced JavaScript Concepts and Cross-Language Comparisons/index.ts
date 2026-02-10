const calculator = (a: number, b:number, callback: (n:number) => number) => {
    return callback(a+b)
}


console.log(calculator(5,10, (n:number) => n))

const dataPromise = new Promise<string| null>((resolve, _reject) => {
    setTimeout(() =>{
        // resolve("Data loaded")
        _reject("failed to load data")
    },3000);
});

dataPromise
    .then((data) => {
        console.log("then called");
        
        return data
        
    })

    .catch((error) => {
        console.log("catch called");
        return error
    })

const displayPromise = async (): Promise<string |unknown> => {
    try {
        const result = await dataPromise;
        if (!result) throw "no data recieved";
        return result;
    } catch (error){
        return error
    }
}

// async function displayPromise():string|null {
//     const result = await 

// return result ;


// }

console.log(displayPromise());
console.log("after promis");


const fetchUserData  = async () => {
    try {
        const response = await fetch("http://jsonplaceholder.typicode.com/users")
        const users = await response.json();
        // console.log(users);
        console.log(users[0].name);
        
        
    } catch (error){
        console.log(error);
        
    }
}

fetchUserData();

const object = '{"name": "jhon", "age":30, "city":"newyork"}'
const parseObject   = JSON.parse(object);
const stringObject = JSON.stringify(parseObject);
console.log(object);
console.log(parseObject);
console.log(stringObject);


