
const lab6 = confirm("Лабараторна №6");
if(lab6){
  function dialogWithUser() {
    const confirmAction = confirm("Хочеш продовжити?");
  
    if (confirmAction) {
      alert("Передбачення дня(який автомобіль вам пасує сьогодні))");
      let number=prompt("Введіть чимсло від 1 до 5.");
      switch (number){
        case "1":
            alert("Сьогодні вам пасує BMW M4");
            break;
        case "2":
            alert("Сьогодні вам пасує Skoda Superb");
            break;
        case "3":
            alert("Сьогодні вам пасує Ferrari laferrari");
            break;
        case "4":
            alert("Сьогодні вам пасує Toyota Rav4");
            break;
        case "5":
            alert("Сьогодні вам пасує Fiat Linea");
            break;
      }
      let count=0;
      while(count<3){
        alert("Вітаємо");
        count++;
      }
    } else {
      alert("Спробуй ще раз пізніше.");
    }
  }
  
  function showDeveloperInfo(lastName, firstName, position = "Студент") {
    alert(`Розробник: ${lastName} ${firstName}\nПосада: ${position}`);
  }
  
  function compareStrings() {
    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");
  
    if (str1 > str2) {
      alert(`Більший рядок: ${str1}`);
    } else if (str2 > str1) {
      alert(`Більший рядок: ${str2}`);
    } else {
      alert("Рядки однакові.");
    }
  }
  dialogWithUser();
  showDeveloperInfo("Чулій","Михайло");
  compareStrings();

  document.body.style.backgroundColor="pink";
  setTimeout(()=>{
    document.body.style.backgroundColor="";
  },30000);
 
  
  const table = document.querySelector("table");


  const caption = document.createElement("caption");


  const captionT = document.createTextNode("Це таблиця відомих автокомпаній");


  caption.appendChild(captionT);

  caption.style.fontWeight = "bold";
  caption.style.fontSize = "18px";
  caption.style.marginBottom = "10px";



  table.insertBefore(caption, table.firstChild);
  const footer = document.querySelector("footer");
  footer.append(" — Оновлено 2025");
  const list = document.querySelectorAll("li");
  list.forEach(function(item) {
      item.prepend("🚗 ");
    });
    const h2 = document.querySelector("h2");
  h2.after("Тут ви маєте змогу ознайомитись з нашим сайтом"); 
  setTimeout(() => {
      const oldPara = document.querySelectorAll("p")[1];
      const newPara = document.createElement("p");
      newPara.innerHTML = '<p>Для повернення на початок натистіть</p><a href="#h1">Повернутись</a></p>';
      oldPara.replaceWith(newPara);
      const img = document.querySelectorAll("img")[6]; 
      img.remove(); 
  }, 5000);
}
document.getElementById("galleryButton").onclick=function(){
  location.href="gallery.html"
}





  
