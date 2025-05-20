
const adButton = document.getElementById("showAdBtn");
const adContainer = document.getElementById("adContainer");


const adHandler = {
  handleEvent(event) {
 
    alert("Знижки на автобай не пропусти!!!!")
    console.log("Реклама показана через:", event.currentTarget);
  }
};
const adHandler1 = {
    handleEvent(event) {
   
      alert("Смачна кава тільк на заправках ВОХ")
      console.log("Реклама показана через:", event.currentTarget);
    }
  };
  const adHandler2 = {
    handleEvent(event) {
   
      alert("Завітайй на дилерський сайт BMW введи промокод misha і отрима 5% знижку на усі авто")
      console.log("Реклама показана через:", event.currentTarget);
    }
  };

adButton.addEventListener("click", adHandler);
adButton.addEventListener("click", adHandler1);
adButton.addEventListener("click", adHandler2);
setTimeout(() => {
    adButton.removeEventListener("click", adHandler);
    adButton.removeEventListener("click", adHandler1);
    adButton.removeEventListener("click", adHandler2);
    console.log("Обробник події для реклами видалено.");
}, 5000);

