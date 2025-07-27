const square=(n)=>{
    return n*n;
}
let id=setInterval(()=>{
    console.log("hello world");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);
const arrayAverage=(arr)=>{
    let average=0;
    for(let i=0;i<arr.length;i++){
        average+=arr[i];
    }
    return average;
}
const isEven=(n)=>(n%2==0);