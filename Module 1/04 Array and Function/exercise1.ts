//exercise 1
function createtriangle(height:number){
    let num:number = 1;
    for (let i:number=0; i <height ;i++){
        let row:string=""
        for (let j:number=1; j<=i+1 ; j++){
            if (num <10) {
                row += "0" + num + " ";
            }else {
                row += num + " "
            }
            num +=1
        }
        console.log(row.trim());

    }


}

// createtriangle(5);

//exercise 2

function loopntimes(num:number){
    let hasil:(string|number)[] = []
    for (let i :number = 1; i <= num; i++){
        if (i % 15 == 0){
        hasil.push("FizzBuzz")
        } else if (i % 3 == 0){
        hasil.push("Fizz")
            } else if (i % 5 == 0 ){
            hasil.push("Buzz")
                }else{
                    hasil.push(i)
                }
    
    }
    return hasil
}
// console.log(loopntimes(20));

//exercise 3 

function BMIcalc(weight: number, height: number) {
    let bmi: number = weight / (height * height);

    if (bmi < 18.5) {
        return("less weight");
    } else if (bmi < 24.9) {
        return("ideal");
    } else if (bmi < 29.9) {
        return("overweight");
    } else if (bmi < 39.9) {
        return("very overweight");
    } else {
        return("obesity");
    }
}

// console.log(BMIcalc(25, 130));

// exercise 4
function removeOdd(array: number[]): number[] {
    return array.filter(num => num % 2 === 0);
}
// console.log(removeOdd([1,2,3,4,5,6,7,8,9,10]));


// exercise 5
function splitString(sentence: string): string[] {
    return sentence
        .trim()
        .split("")
        .filter(word => word !== "");
}

console.log(splitString("Jangan Tanya sama saya dong"));