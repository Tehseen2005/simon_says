let para1=document.createElement('p');
para1.append("Hey I'm red!");

document.querySelector('body').appendChild(para1);
para1.classList.add('red');

let heading3=document.createElement('h3');
heading3.textContent="I'm a blue h3";
document.querySelector('body').appendChild(heading3);
heading3.style.color='blue';

let divv=document.createElement('div');
divv.classList.add('divvv');
document.querySelector('body').appendChild(divv);

let heading1=document.createElement('h1');
heading1.innerText="I'm in a div";
document.querySelector('.divvv').appendChild(heading1);

let para2=document.createElement('p');
para2.innerText='Me too';
document.querySelector('.divvv').appendChild(para2);