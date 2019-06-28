//let arr=[1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9, 0];
let arr=[0,0,1,0,0,5,0,0,1,2,3,0];
let k;
for (let i=0;i<arr.length;i++) {
    if(arr[i]===0 )
    {
        k=i;
        break;
    }
}
let l;
for (let i=0;i<arr.length;i++) {
    if(arr[i]!==0 && arr[i-1]===0)
    {
        l=i;
        break;
    }
}

console.log(l);


for(let i=k;i<arr.length;i++)
{
    if(l==arr.length)
    {
        break;
    }
    if(arr[l]!==0){

        let x=arr[k];
        arr[k]=arr[l];
        arr[l]=x;
        ++k;
        ++l;
    }
    else{
        ++l;
    }
}

let result="";
for(let i=0;i<arr.length;i++)
{
    result+=arr[i]+" ";
}
console.log(result);





