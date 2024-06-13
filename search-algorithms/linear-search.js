
const numbers = [2, 4, 67, 8, 44, 6, 12];
function linearSearch1(array, num) {
  // for (const i = 0; i < array.length; i++) 
   for (const i in array)
    {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

// linearSearch(numbers, 8); // returns index 4
// linearSearch(numbers, 28); // since 28 is not there, returns -1 
// console.log(linearSearch1(numbers.num));

/*-----------------------------*/

 const linearSearch2 = (arr, item) => {
   for (const i in arr) 
   {
     if (arr[i] === item) {
        return 'Data found at = '  +i;
     }
   }
   return 'Data not found';
  //  return -1;
 };
 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(linearSearch2(nums, 3))
//  console.log(linearSearch2(nums, 9))
//  console.log(linearSearch2(nums, 1))
console.log(linearSearch2(nums, 10))
