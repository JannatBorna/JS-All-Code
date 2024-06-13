function binarySearch(array, item){
    let start = 0;
    let end = array.length - 1 ;
    let mid;
    while(start <= end){
        mid = Math.floor((start+end)/2);
        if(array[mid] === item){
            return 'Data found at index = ' + mid;
        }
        else if(array[mid] < item){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return 'Data not found';
}
const nums = [8, 12, 20, 24, 30, 42, 55, 87]
console.log(binarySearch(nums, 21))