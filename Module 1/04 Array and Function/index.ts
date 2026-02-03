const strArray:string[]= ["Apple", "Banana", "Cherry"];
strArray.push("Date");
const firstItem:string = strArray[1]!; //ambil item berapa
console.log(firstItem);
console.log(strArray.length); //cek panjang array
console.log(strArray[strArray.length-1]); //last item
const lastremoveditem: string = strArray.pop()!;
console.log(strArray);
console.log(`Removed item = ${lastremoveditem}`);
strArray.unshift("Avocado") //tambah first item
console.log(strArray);
const firstremoveditem: string = strArray.shift()!;
console.log(strArray)
console.log(`item pertama remove ${firstremoveditem}`)

for (let fruit of strArray){
    console.log(fruit)
}

strArray.forEach(function(fruit,index,arr){
console.log(index+ " : "+ fruit + " in " + arr);
})

strArray.splice(1,0,"blackberry", "raspberry") //remove index ke-n lalu tambahin valu baru
console.log(strArray)

const slicedArray: string[]= strArray.slice(1,4) //copy array
console.log(slicedArray)

if (strArray.includes("banana")){
    console.log("Bnana is found in array");
    
} else {
    console.log("Banan not found :(");
    
}

const numbers:number[] = [10, 20, 30, 40, 50];
for (const number of numbers){
    console.log(number);
}
numbers.forEach((number:number, i:number)=> {
    console.log(`index ${i}: ${number}`)
})

console.log(numbers.toString()+10); //rubah jd string
console.log(numbers.join(" ")+10);
console.log(["A","B","C","D"].join("").split(" "));

console.log(numbers.map((number:number)=> number*10)) //contoh map (copy tanpa merubah)

console.log(numbers.map((number:number)=>{
    if (number  === 30) return;
    return number*10
}))



console.log(numbers.find((n) => n >20))
console.log(numbers.filter((n) => n >20));
console.log(numbers.reduce((acc, curr) => (acc+curr), 0));


