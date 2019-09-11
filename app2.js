//element.innerHTML="different text";
//element.style.color ="blue";
var div = document.getElementById("hello");
div.style.backgroundColor ="yellow";
div.style.height ="100px";
div.style.width ="100px";
div.style.color="white";
div.style.padding="50px 50px 50px 10px";
div.style.broder = "20px";
div.style.boxShadow = "blue 5px 5px 10px";
var p = document.createElement("p");
p.style.color="pink";
p.style.fontStyle="italic";
var text = ("debby is learning javascript");
p.innerHTML =text;
div.appendChild(p);

console.log(p);