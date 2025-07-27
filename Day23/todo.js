let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click",function(){

    //create list item
    let item=document.createElement("li");
    item.textContent = input.value + " ";
    //create delete button
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    //add delete functionality
    delbtn.addEventListener("click",function(){
        item.remove();
    })

    item.appendChild(delbtn);
    ul.appendChild(item);
    console.log(input.value);
    input.value="";
});
// ✅ Makes old "Delete" buttons work too
document.querySelectorAll(".delete").forEach(delbtn => {
    delbtn.addEventListener("click", function () {
        this.parentElement.remove(); // Remove the <li> that holds the button
    });
});
