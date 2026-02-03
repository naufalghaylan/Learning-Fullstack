// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type Obj = Record<string, JSONValue> | JSONValue[]

// function isEmpty(obj: Obj): boolean {
//     if (Array.isArray(obj)) {
//         return obj.length === 0;
//     }
//     return Object.keys(obj).length === 0;
// }


// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

// function argumentsLength(...args: JSONValue[]): number {
//     return args.length

// };


// interface Array<T> {
//     last(): T | -1;
// }

// Array.prototype.last = function() {
//     if (this.length === 0){
//         return -1
//     } return this[this.length - 1]
// };

// function isPalindrome(x: number): boolean {
//     if (x < 0) return false;

//     let original = x;
//     let reversed = 0;

//     while (x > 0) {
//         const digit = x % 10;
//         reversed = reversed * 10 + digit;
//         x = Math.floor(x / 10);
//     }

//     return reversed === original;
// }

function romanToInt(s: string): number {
    let n=s.split("")
    const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let total:number = 0;

for (let i:number = 0 ; i < n.length;i++ ){
    let current:number=romanMap[n[i]!]!;
    let next:number=romanMap[n[i+1]!]!;

    if (next !== undefined && current<next){
        total -= current;
    } total+= current;
} return total
};
