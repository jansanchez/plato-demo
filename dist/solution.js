
function solution(arr) {
    n = arr.length;
    if (n===0){
        return -1;
    }
    sum = 0;
    i=0;
    for(i=0;i<n;i++){
        sum+=arr[i];
    }

    sum_left = 0;    
    for(i=0;i<n;i++) {
        sum_right = sum - sum_left - arr[i];
        if (sum_left == sum_right){
            return i;
        }
        sum_left +=arr[i];
    } 
    return -1;
}

solution([-1,3,-4,5,1,-6,2,1])

