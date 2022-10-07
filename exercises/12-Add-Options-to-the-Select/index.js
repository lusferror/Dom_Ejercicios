let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here.
let select = document.querySelector("#mySelect");
countries.forEach(element=>{
    let li=document.createElement("option")
    li.value=element
    li.innerHTML=element
    select.appendChild(li);
})
select.addEventListener("change",function(){
    alert(select.value);
})
