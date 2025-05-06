const adds = document.getElementsByTagName("strong");
Array.from(adds).forEach(function(add) {
  add.innerHTML = "Знижки на електромобілі завершаться зовсім скоро!!";

});


const title = document.getElementById("newsT");

title.textContent = "Новини📰"; 

const par = document.querySelectorAll("p")[1];
par.outerHTML = "<p>Новини уже завтра</p>";
const span = document.querySelector("span");
const spanTextNode = span.firstChild; 
spanTextNode.nodeValue = "New Keoniggseg Jesko record";

