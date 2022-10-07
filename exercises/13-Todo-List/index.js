// Your code here
let entrada = document.getElementById("addToDo");
let lista = document.querySelector("ul");
entrada.addEventListener("keyup", function prueba(event) {
    if (event.keyCode === 13) {
        let li = document.createElement("li");
        li.innerHTML = `<span><i class="fa fa-trash"></i></span>` + entrada.value;
        lista.appendChild(li)
        entrada.value = "";
        eliminar();
    }
});
function eliminar(){
i = document.querySelectorAll("i")
i.forEach(Element => {
    Element.addEventListener("click", (e) => {
        let li = Element.parentNode.parentNode;
        li.parentNode.removeChild(li);
    })
})
}

eliminar();
