// const nums = [2, 4, 6, 8, 10];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * 2);
// }

// **Questions:**
// - What numbers will be printed?
// [4,8,12,16,20]

// - Rewrite the loop so it prints only odd numbers from 1 to 10.


const nums = [2, 3, 6,7,5, 8, 10,11];

for (let i = 0; i < nums.length; i++) {
  if(nums[i] % 2 !== 0 && nums[i] < 10 ){
    console.log(nums[i]);
  }
}