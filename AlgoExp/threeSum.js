
function threeSum(arr, targetSum) {
    arr.sort((a,b) => a - b);
    let len = arr.length;
    let triplets = [];

    for( let i = 0; i < len - 2; i++){
        let left = i + 1;
        let right = len - 1;
        while(left < right){
            const currentSum = arr[i] + arr[left] + arr[right];
            if(currentSum === targetSum){
                triplets.push([arr[i], arr[left], arr[right]])
                left++;
                right--;
            } else if (currentSum < targetSum){
                left++;
            } else if (currentSum > targetSum){
                right--;
            }
        }
    }
    return triplets;
}