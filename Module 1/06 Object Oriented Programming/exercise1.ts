

interface studentData {
    name:string,
    email:string,
    age:number,
    score:number
} 

interface studentOutput {
    score: {
        highest: number;
        lowest: number;
        average: number;
    };
    age: {
        highest: number;
        lowest: number;
        average: number;
    }
}

const student1: studentData = {
    name: "Jessica Smith",
    email: "jessica.smith@example.com",
    age: 16,
    score: 85
}

const student2: studentData = {
    name: "Michael Lee",
    email: "michael.lee@example.com",
    age: 17,
    score: 72
}

const student3: studentData = {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    age: 15,
    score: 91
}

const student4: studentData = {
    name: "David Kim",
    email: "david.kim@example.com",
    age: 18,
    score: 67
}

const student5: studentData = {
    name: "Sara Müller",
    email: "sara.muller@example.com",
    age: 15,
    score: 78
}

const students: studentData[] = [student1, student2, student3, student4, student5];

function calculateArray (data:studentData[]):studentOutput{
    if (data.length === 0) {
    return {
        score: {
            highest: 0,
            lowest: 0,
            average: 0
        },
        age: {
            highest: 0,
            lowest: 0,
            average: 0
                }
        };
    }
    let scoreHigh = data[0]?.score
    let scoreLow = data[0]?.score
    let scoreTotal = 0
    let ageHigh = data[0]?.age
    let ageLow = data[0]?.age
    let ageTotal = 0
    for (let i =0; i<data.length; i++){
        if (scoreLow!>data[i]?.score!){scoreLow =data[i]?.score}
        if (scoreHigh!<data[i]?.score!) {scoreHigh =data[i]?.score}
        scoreTotal = scoreTotal + data[i]?.score!;
        if (ageLow!>data[i]?.age!){ageLow =data[i]?.age}
        if (ageHigh!<data[i]?.age!) {ageHigh =data[i]?.age}
        ageTotal = ageTotal + data[i]?.age!;

    }
    let scoreAverage = scoreTotal/data.length;
    let ageAverage = ageTotal/data.length;
    
    return {
        score: {
            highest: scoreHigh!,
            lowest: scoreLow!,
            average: scoreAverage!
        },
        age: {
            highest: ageHigh!,
            lowest: ageLow!,
            average: ageAverage!
                }
        };
    
    
}


// console.log(calculateArray(students));



//nomer 2

class Product{
    public id:number;
    public name:string;
    public price:number;
    constructor(id:number,name:string,price:number){
        this.id = id
        this.name = name
        this.price = price
    }
}

class Transaction{
    private cart: { product: Product; qty: number }[] = [];


    public addToCart(product: Product, qty: number): void {
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i]!.product.id === product.id) {
            this.cart[i]!.qty += qty;
            return; // berhenti karena sudah ketemu
        }
    }

    // kalau tidak ditemukan, tambahkan item baru
    this.cart.push({ product, qty });
    }

    public showTotal() {
        let total:number = 0

        for (let i =0 ; i < this.cart.length;i++){
            const item = this.cart[i]
            total += item!.product.price * item!.qty
            
        }
        return total
    }

    public checkout(){
        const total = this.showTotal();
        this.cart = [];
        return total;
        
    }

}

const indomie = new Product(1, "Indomie", 3000);
const susu = new Product(2, "Susu", 8000);

const transaction = new Transaction();

transaction.addToCart(indomie, 2);
transaction.addToCart(susu, 1);

console.log(transaction.showTotal());
transaction.checkout()
console.log(transaction.showTotal());
transaction.addToCart(indomie, 5);
transaction.addToCart(susu, 10);
console.log(transaction.showTotal());
