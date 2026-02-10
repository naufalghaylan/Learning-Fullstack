interface Student {
    name:string
    email:string
}

const array1:Student[] = [
    {name: 'student 1', email: 'student1@mail.com'}, {name: 'student 2', email: 'student2@mail.com'}
];

const array2:Student[] = [
    {name: 'student 1', email: 'student1@mail.com'}, {name: 'student 3', email: 'student3@mail.com'}
];

const merged:Student[] = [...array1, ...array2];

const mapMerged = new Map<string, { name: string; email: string }>()

for (let i = 0; i < merged.length;i++){
    const student = merged[i]!
    mapMerged.set(student.email, student)
    Array.from(mapMerged.values())

}

// console.log(mapMerged);


function transform(data: object[]): object[] {
    let result: object[] = []

    for (let i = 0; i < data.length; i++) {
        let newObj: Record<string, any> = {}

        for (const [key, value] of Object.entries(data[i])) {
            newObj[value] = key
        }

        result.push(newObj)
    }

    return result
}

console.log(transform([{ name: 'David', age: 20 }]));




