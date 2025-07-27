let btn=document.createElement("button");
let input=document.createElement("input");
input.textContent="enter the input";
document.querySelector('body').append(input);
btn.innerHTML="Click me";
document.querySelector('body').append(btn);

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let button=document.querySelector("#btn");
btn.classList.add("btnstyle");

let heading=document.createElement("h1");
document.querySelector('body').append(heading);
heading.textContent="DOM Practice";
heading.classList.add("h1");

let para=document.createElement("p");
document.querySelector('body').append(para);
para.innerHTML="Apna College <b>Delta</b> Practice";

