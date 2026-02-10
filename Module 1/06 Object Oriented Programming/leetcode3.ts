// class ParkingSystem {
// private big: number
// private medium: number
// private small: number

//     constructor(big: number, medium: number, small: number) {
//         this.big = big
//         this.medium = medium
//         this.small = small 
//     }

//     addCar(carType: number): boolean {
//         if (carType == 1){
//             if (this.big >= 1){
//                 this.big--
//                 return true
//             } return false 
//         } else if (carType == 2){
//             if (this.medium >=  1){
//                 this.medium--
//                 return true
//             } return false 
//         } else if (carType == 3){
//             if (this.small >=  1){
//                 this.small--
//                 return true
//             } return false 
//         } return false
//     }
// }

// class MyHashSet {
//     private data: number[] = []
//     constructor() {
        
//     }

//         add(key: number): void {
            
//             if (!this.contains(key)){
//                 this.data.push(key)
//             } return 
//         }

//     remove(key: number): void {
//         for (let i =0; i <this.data.length;i++){
//             if (this.data[i]==key){
//                 this.data.splice(i,1);
//                 break
//             } 
//         }
//     }

//     contains(key: number): boolean {
        
//         for (let i = 0; i < this.data.length ; i++){
//             if (key == this.data[i]){
//                 return true
//             } 
//         } return false
//     }
// }

// class RangeFreqQuery {
//     private positions: Map<number, number[]>

//     constructor(arr: number[]) {
//     this.positions = new Map()
//     for (let i = 0; i < arr.length;i++){
//         if (!this.positions.has(arr[i])){
//             this.positions.set(arr[i], [])
//         } this.positions.get(arr[i]).push(i)
//     }

//     }

//     private lowerBound(arr: number[], target: number): number {
//     let l = 0
//     let r = arr.length

//         while (l < r) {
//             let mid = Math.floor((l + r) / 2)

//             if (arr[mid] < target) {
//                 l = mid + 1
//             } else {
//                 r = mid
//             }
//         }

//         return l
//     }

//     private upperBound(arr: number[], target: number): number {
//     let l = 0
//     let r = arr.length

//         while (l < r) {
//             let mid = Math.floor((l + r) / 2)

//             if (arr[mid] <= target) {
//                 l = mid + 1
//             } else {
//                 r = mid
//             }
//         }

//         return l
//     }


//     query(left: number, right: number, value: number): number {
//         const arrIndex = this.positions.get(value)
//         if (!arrIndex) return 0
//         const leftIndex = this.lowerBound(arrIndex, left)
//         const rightIndex = this.upperBound(arrIndex, right)

//         return rightIndex-leftIndex
//     }
// }

