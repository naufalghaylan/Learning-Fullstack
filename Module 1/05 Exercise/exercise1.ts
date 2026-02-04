const array:number[] = [1,3,2,9,5,7,6]


let lowest:number =array[0]!;
let highest:number =array[0]!;
let total:number = 0

for (let i:number = 1 ; i < array.length; i++ ){
    if (lowest>array[i]!){
        lowest = array[i]!}}


for (let i:number = 1 ; i < array.length; i++ ){
    if (highest<array[i]!){
        highest= array[i]!}}

for (let i = 0; i < array.length; i++) {
    total = total + array[i]!;
}

let average: number = total / array.length;

let sortmax:number= Math.max.apply(null, array)
let sortmin:number= Math.min.apply(null, array)

// console.log("angka terendah= " + lowest);
// console.log("angka tertinggi= " + highest);
// console.log("rata2 = " + Math.floor(average));

// console.log(sortmax);

// console.log(sortmin);


//nomer 2
const arr:string[]= ["apple", "banana", "cherry", "date"]
const arr2:string[]= ["apple", "banana"]

function formatWords(arr: string[]): string {

    if (arr.length === 0) {
        return "";
    } else if (arr.length===1){
        return arr[0]!
    } else if (arr.length === 2){
        return arr[0] + " and " + arr[1]
    } else {
        
        
        return arr.slice(0, arr.length - 1).join(" , ") + ", and " + arr[arr.length - 1]

    }

}
// console.log(formatWords(arr));
// console.log(formatWords(arr2));

//soal 3

function secondSmallest(numbers: number[]): number {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbers.length; i++) {

        let current = numbers[i];

        if (current! < smallest) {
            secondSmallest = smallest;
            smallest! = current!;
        } 
        else if (current! > smallest && current! < secondSmallest) {
            secondSmallest = current!;
        }
    }

    return secondSmallest;
}


// console.log(secondSmallest(array));


//soal 4
const ari:number[] = [1,2,3]
const ari2:number[]= [3,2,1]

function add2array (ar1:number[], ar2:number[]):number[] {
    if (ar1.length !== ar2.length){
        console.warn("length array tidak sama")
    } return ar1.map((value, index) => value + ar2[index]!);
}
// console.log(add2array(ari,ari2));

//soal 5
const cekarray:number[] = [1,2,3,4,5]
function addcheckarray (array:number[], numbers:number):number[]{
    if (!array.includes(numbers)) array.push(numbers);
    return array

};
// console.log(addcheckarray(cekarray, 3));
// console.log(addcheckarray(cekarray, 7));

//soal p2 
//soal 1

const mixedarray:any[] = ["3", 1, "string", null, false, undefined, 2];

function sumMixedArray(array: any[]): number {
    return array.reduce((acc, curr) => {
        if (typeof curr === "number") {
            return acc + curr;
        }
        return acc;
    }, 0);
}
// console.log(sumMixedArray(mixedarray));


//soal 2
function insertLimit(maxSize:number, ...numbers:number[]):number[]{
    return numbers.slice(0,maxSize)
}

// console.log(insertLimit(5, 5, 10, 24, 3, 6, 7, 8));

//soal3
function combine(array1:number[], array2:number[]):number[]{
    return [...array1, ...array2]
}
// console.log(combine(ari,ari2));

//soal4
const duplicate:number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function findDuplicate(array: number[]): number[] {

    const count: { [key: number]: number } = {};
    const result: number[] = [];

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (count[current!] !== undefined) {
            count[current!]! ++;
        } else {
            count[current!] = 1;
        }
    }

    for (const key in count) {
        if (count[key]! > 1) {
            result.push(Number(key));
        }
    }

    return result;
}

// console.log(findDuplicate(duplicate));


//soal 5
const dif1:number[]= [1, 2, 3, 4, 5]
const dif2:number[]= [3, 4, 5, 6, 7]

function findDifference(arr1: number[], arr2: number[]): number[] {

    const part1 = arr1.filter(x => !arr2.includes(x));
    const part2 = arr2.filter(x => !arr1.includes(x));

    return [...part1, ...part2];
}
// console.log(findDifference(dif1,dif2));


//page 3
//soal1
const notPrimitives:any[]=[1, [], undefined, {}, "string", {}, []];
const getPrimitives = (arr:unknown[]):unknown[] => {
    const isPrimitives = (item: unknown): boolean => {
  return (
    typeof item === "string" ||
    typeof item === "number" ||
    typeof item === "boolean" ||
    typeof item === "undefined" ||
    item === null
  );
};
return arr.filter(isPrimitives);
}
// console.log(getPrimitives(notPrimitives));

//soal 2
function sumOfDuplicates(array: number[]): number {

    const count = array.reduce((acc: {[key:number]:number}, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    return array.reduce((sum, curr) => {
        return count[curr]! > 1 ? sum + curr : sum;
    }, 0);
}

//soal3
type RPSChoice = "rock" | "paper" | "scissor"

const RockPaperScissor = (player1:RPSChoice): string => {
    const choices: RPSChoice[] = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    const winMap: Record<RPSChoice, RPSChoice> = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper"
};
if (player1 === computerChoice) {
   return "Draw";
}

if (winMap[player1] === computerChoice) {
   return "Win";
}

return "Lose";


}