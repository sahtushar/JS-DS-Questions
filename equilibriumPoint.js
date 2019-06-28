let arr=[13,10,2,5,18];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i];
}

let k=arr.length-2;
let sum_before=sum;
let sum_after=arr[arr.length-1]; //last element

for(let i=arr.length-1;i>0;i--){

    sum_before=sum-sum_after-arr[k];
    if(sum_before===sum_after)
    {
        console.log(arr[k]);
        break;
    }
    --k;
    // console.log(sum_before,sum_after);
    sum_after=sum_after+arr[i-1];




}




