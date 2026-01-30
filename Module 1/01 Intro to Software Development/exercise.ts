let length: number = 5;
let width: number = 3;
let radius: number = 5;
let angle_a: number = 80;
let angle_b: number = 65;
const now : Date = new Date();
const customDate_1 : Date = new Date('2022-01-20');
const customDate_2 : Date = new Date('2022-01-22');

function RecArea(length: number, width: number): number {
    return length * width;
    }

function RecPerimeter(length: number, width: number): number {
    return 2 * (length + width);
    }

function CircleDiameter(radius: number): number {
    return 2 * radius;
    }

function CircleArea(radius: number): number {
    return Math.PI * radius * radius;
    }
function CircleCircumference(radius: number): number {
    return 2 * Math.PI * radius;
    }

function Angle(angle_a: number, angle_b: number): number {
    return 180 - (angle_a + angle_b);
    }
function ConvertDaysToYears(Numberdays: number): string {
    var years = Math.floor(Numberdays / 365);
    var months = Math.floor((Numberdays % 365) / 30);
    var days = Math.floor((Numberdays % 365) % 30);

    return `${years} years, ${months} months, ${days} days`;

    }
function DateDifference(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
    }

console.log(RecArea(length, width));
console.log(RecPerimeter(length, width));
console.log(CircleDiameter(radius));
console.log(CircleArea(radius));
console.log(CircleCircumference(radius));
console.log(Angle(angle_a, angle_b));
console.log(ConvertDaysToYears(400));
console.log(ConvertDaysToYears(366));
console.log(DateDifference(customDate_1, customDate_2));





