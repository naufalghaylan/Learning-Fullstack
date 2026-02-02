const age: number = 10; 
const isLegible: boolean = age > 17;
const almostLegible: boolean = age >=13;
const hadID: boolean = true;

if (isLegible){
    console.log("Bisa bikin ktp");
} else if (!isLegible && hadID){
    console.log("Kecil2 Bikin ktp");
} else if (almostLegible) {
    console.log("hampir Bisa bikin Ktp");   
}   else {
    console.log("Belum bisa bikin ktp")
}

const n: number =  5;
const isEven: boolean = n % 2  ===0;
if (isEven){
    console.log(`${n} adalah bilangan genap`)
} else {
    console.log(`${n} adalah bilangan ganjil`)
}
//CONTOH TERNARY
console.log(`${n} adalah bilangan ${isEven ? "genap ": "ganjil"}`);

const grade : string = "A";

switch (grade ){
    case "A":
        console.log ("Nilai anda sangat baik");
        break;
    case "B":
        console.log ("Nilai anda  baik");
        break;
    case "C":
        console.log ("Nilai anda cukup");
        break;
    case "D":
        console.log ("Nilai anda kurnag");
        break;
    case "E":
        console.log ("Nilai anda sangat kurang");   
        break;  
    default:
        console.log ("Nilai tidak valid")
}

let nama = "joni";
let user = nama || "guest"; // kalau || = nama, kalai && == guest
console.log(user);

let nama2 = "Jono";
let user2 = nama2 && `${nama2} adalah user yang terdaftar`; // kalau || = nama, kalai && == guest
console.log(user2);



//loop statement

for (let i = 0; i < 3 ; i++){
    console.log(`pengulangan ke ${i}`)
}

// continue statmenet

for (let i3 = 0; i3 < 3 ; i3++){
    if (i3=== 1) continue;
    console.log(`pengulangan ke ${i3}`)
}
//while statement
let i2 :number = 0;
while (i2<3){
    console.log(`pengulangkan ke ${i2}`);
    i2++;
}

do {
    console.log(`Do while pengulanagna ke-${i2}`);
} while (false);

let sum : number = 0;

while (true) {
    let value: number = 1;

    if (sum=== 5 ) break;

    sum += value;
}


let nNumber:number = 6
let factorial:number = 1;
for (let i = 1; i <= nNumber; i++) {
    factorial *= i    
}
console.log(factorial);