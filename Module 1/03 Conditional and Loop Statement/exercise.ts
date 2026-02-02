// odd or even
const n: number =  25;
const isEven: boolean = n % 2  ===0;
if (isEven){
    console.log(`${n} adalah bilangan genap`)
} else {
    console.log(`${n} adalah bilangan ganjil`)
}

//prime
const p: number = 6;
let isPrime: boolean = true;

if (p <= 1) {
  isPrime = false;
}

for (let i = 2; i <= p / 2; i++) {
  if (p % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${p} adalah prima`);
} else {
  console.log(`${p} bukan prima`);
}


//sum number


 
function sumN(n: number) : number{
    let sum = 0
    for (let i2=1 ;i2 <= n; i2++){
        sum += i2;
        
    }
        
    return(sum);

}
console.log("hasil dari sum adalah "+sumN(5));
console.log("hasil dari sum adalah "+sumN(3));

//factorial
function FactorialN(n2: number) : number{
    let factorial =1
    for (let i3=1 ;i3 <= n2; i3++){
        factorial *= i3;
        
    }
        
    return(factorial);

}
console.log("hasil factorial adalah "+FactorialN(4));
console.log("hasil factorial sum adalah "+FactorialN(6));

//fibbonanci
function fibbonanciN(n3: number) : number{
let n1:number =0;
let n2:number=1;
let nextn:number = 0;
for (let i3=1 ;i3 <= n3; i3++){

    nextn= n1+n2;
    n1=n2;
    n2=nextn

    }
return (n1);

}
console.log("hasil fibbonanci adalah "+fibbonanciN(15));
console.log("hasil fibbonanci sum adalah "+fibbonanciN(6));