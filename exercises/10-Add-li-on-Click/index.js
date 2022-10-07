let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let mylist =  document.querySelector("#myList");
	let li = document.createElement("li");
	li.innerHTML="Forth Elemen";
	mylist.appendChild(li);
});
