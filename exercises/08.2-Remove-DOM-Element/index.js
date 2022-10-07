let list = document.querySelector("#parentLi")
let child = list.childNodes;
let hijo = child[3];
hijo.parentNode.removeChild(hijo)
