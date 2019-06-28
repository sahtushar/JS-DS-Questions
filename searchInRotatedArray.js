function binarySearch(arr,start,end,key)
{
    let mid=(parseInt(start+end)/2);

    if(end>=start) {
        if (arr[mid] === key) {
            return mid;
        }
        if (key < arr[mid]) {
            return binarySearch(arr, start, mid - 1, key);
        } else {
            return binarySearch(arr, mid + 1, end, key);
        }
    }

    return -1;

}
function findInRotated(arr, start, end, key)
{
    let mid=parseInt((start+end)/2);

    if(arr[mid]===key)
    {
        return mid;
    }
    if(key>arr[start] && key<arr[end])
    {
        return binarySearch(arr, start, mid-1,key);

    }
    else{
        return binarySearch(arr, mid+1, end, key);
    }
}



let arr=[2,6,7,8,1,0,-1];


console.log(findInRotated(arr,0, arr.length-1, 1));
