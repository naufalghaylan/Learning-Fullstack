// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>();

//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         const complement = target - current;

//         if (map.has(complement)) {
//             return [map.get(complement)!, i];
//         } else {
//             map.set(current, i);
//         }
//     }

//     return [];
// }
