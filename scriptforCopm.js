
function handleMoreInfo(event, info) {
    console.log("Подія спрацювала на елементі:", event.currentTarget);
    alert(info);
  }
  function toggleCarTable(buttonId, tableId, tableHTML, moreInfo) {
    const existingTable = document.getElementById(tableId);
    if (existingTable) {
      existingTable.remove(); 
    } else {
      const newTable = document.createElement('div');
      newTable.innerHTML = tableHTML; 
      document.body.appendChild(newTable);
      const table = newTable.querySelector('table');
      const moreButton = document.createElement('button');
      moreButton.textContent = 'Більше';
      moreButton.classList.add('more-button');
      table.appendChild(moreButton);
  
 
      const showMoreInfo = function(event) {
        handleMoreInfo(event, moreInfo);
      };
  
      moreButton.addEventListener('click', showMoreInfo);

    }
  }

  

  function Fiat() {
    const fiatTableHTML = `
      <table class="car-table" id="fiat-table">
        <tr>
          <td colspan="2" class="photo-cell">
            <img src="images/fiat.jpg">
          </td>
        </tr>
        <tr>
          <td>Ціна</td>
          <td>4000 $</td>
        </tr>
        <tr>
          <td>Потужність</td>
          <td>120 к.с.</td>
        </tr>
        <tr>
          <td>Рік</td>
          <td>2009</td>
        </tr>
        <tr>
          <td>Об’єм двигуна</td>
          <td>1.4 л</td>
        </tr>
      </table>
    `;
    const fiatInfo = "Fiat Linea — модель автомобіля італійського автовиробника Fiat, яка була розроблена у співпраці з турецькою компанією Tofas. При довжині 4,56 метра Linea досягла розмірів седанів нижнього середнього класу, але вона базується на подовженій платформі маленького автомобіля Grande Punto.Цей Fiat - компактний автомобіль з гарною економією пального та доступною ціною.";
    toggleCarTable("fiat-button", "fiat-table", fiatTableHTML, fiatInfo);
  }
  

  document.getElementById("BMWM5").onclick = function () {
    const bmwTableHTML = `
      <table class="car-table2" id="bmw-table2">
        <tr>
          <td colspan="2" class="photo-cell">
            <img src="images/bmwm5.webp">
          </td>
        </tr>
        <tr>
          <td>Ціна</td>
          <td>100000 $</td>
        </tr>
        <tr>
          <td>Потужність</td>
          <td>620 к.с.</td>
        </tr>
        <tr>
          <td>Рік</td>
          <td>2021</td>
        </tr>
        <tr>
          <td>Об’єм двигуна</td>
          <td>4.4 л</td>
        </tr>
      </table>
    `;
    const bmwwInfo = "BMW M5 - спортивна версія автомобілів BMW п'ятої серії. Виробляється дочірною компанією BMW M. Перше покоління було представлено в 1984 році.";
    toggleCarTable("BMWM5", "bmw-table2", bmwTableHTML, bmwwInfo);
  };

const carList = document.getElementById("carList");

carList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("highlighted");
    console.log("Клік по:", event.target.textContent);
  }
});

const menu = document.getElementById("menu");
const carInput = document.getElementById("carInput");
menu.addEventListener("click", function(event) {
  const action = event.target.dataset.action;

  if (!action) return; 

  switch (action) {
    case "add":
        const carName = carInput.value.trim();
        if (carName) {
          const newItem = document.createElement("li");
          newItem.textContent = carName;
          carList.appendChild(newItem);
          carInput.value = ""; 
        } else {
          alert("Будь ласка, введіть назву авто!");
        }
        break;

    case "remove":
      if (carList.lastElementChild) {
        carList.removeChild(carList.lastElementChild);
      }
      break;

    case "clear":
      carList.innerHTML = "";
      break;

    default:
      console.log("Невідома дія:", action);
  }
});


  