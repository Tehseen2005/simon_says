let btn=document.querySelector("button");
let heading=document.querySelector("h2");
let div=document.querySelector("div");
console.dir(btn);
console.dir(heading);
btn.addEventListener("click",function(){
    let firstcolor= Math.floor(Math.random()*255)+1;
    let secondcolor= Math.floor(Math.random()*255)+1;
    let thirdcolor=Math.floor(Math.random()*255)+1;
    div.style.backgroundColor = `rgb(${firstcolor}, ${secondcolor}, ${thirdcolor})`;
    heading.textContent=`rgb(${firstcolor},${secondcolor},${thirdcolor})`;
})
