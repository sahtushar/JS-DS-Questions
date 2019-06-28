//let arr=[1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9, 0];
let arr=[2,5,0,0,1,0,0];
let k;
for (let i=0;i<arr.length;i++) {
    if(arr[i]!==0)
    {
        k=i;
        break;
    }
}
let z=k;
for(let i=0;i<=k;i++)
{
    if(arr[i]===0)
    {
        let x=arr[z];
        arr[z]=arr[i];
        arr[i]=x;
        ++z;
    }
}

for (let i=arr.length-1;i>=0;i--) {
   console.log(arr[i]);
}
