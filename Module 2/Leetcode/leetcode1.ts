// function lengthOfLongestSubstring(s: string): number {
//     let start = 0;
//     let maxLength = 0;
//     const lastSeen: Record<string, number> = {};

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if (char in lastSeen) {
//             start = Math.max(start, lastSeen[char] + 1);
//         }

//         lastSeen[char] = i;

//         const currentLength = i - start + 1;
//         maxLength = Math.max(maxLength, currentLength);
//     }

//     return maxLength;
// }

// function maximumUniqueSubarray(nums: number[]): number {
//     let start = 0;
//     let sum = 0;
//     let maxSum = 0;
//     const seen = new Set<number>();

//     for (let end = 0; end < nums.length; end++) {
//         while (seen.has(nums[end])) {
//             seen.delete(nums[start]);
//             sum -= nums[start];
//             start++;
//         }

//         seen.add(nums[end]);
//         sum += nums[end];
//         maxSum = Math.max(maxSum, sum);
//     }

//     return maxSum;
// }

function minimumCardPickup(cards: number[]): number {
    const lastSeen: Record<number, number> = {};
    let minLength = Infinity;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        if (card in lastSeen) {
            const length = i - lastSeen[card] + 1;
            minLength = Math.min(minLength, length);
        }

        lastSeen[card] = i;
    }

    return minLength === Infinity ? -1 : minLength;
}