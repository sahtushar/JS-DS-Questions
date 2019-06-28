let arr=[12,11,1,7,5,9,2,0,5];

for(let i=0;i<arr.length-1;i++)
{

   console.log(greaterExistOrNot(arr,i+1,arr.length-1, arr[i]));
}
console.log(-1);

function greaterExistOrNot(arr,start,end,previous)
{
    let max=arr[start];
    for(let i=start+1;i<arr.length;i++)
    {
        if(arr[i]>max){
            max=arr[i];
        }
    }

    if(previous>max)
    {

        return -1;
    }
    else{
        return max;
    }
}