let defaultNumber = 0;
let isDec = false;


// let blnc = $('#Balance').val();
// console.log(blnc);



function setValue() {

 let value = prompt('Введите значение');

 $('#secvalue').html(value);
}

function manValue(element, active = false) {
  let hideElement = $('#setValue');
  let button = $('#hugbutton');
  let bool = $(button).hasClass('active');

  if (bool)  {
      $(button).removeClass('active');
      $(button).text('Скрыть');
      $(hideElement).show();
  } else {
     $(button).addClass('active');
     $(button).text('Показать');
     $(hideElement).hide();

  }

  console.log($(button).hasClass('active'));
  console.log(button);

}

function inc(n) {
    n = n + 1;
    console.log("число увеличивается на 1", n);
    defaultNumber = n;
}
function dec(n) {
    n = n - 1;
    console.log("число уменьшено на 1", n);
    defaultNumber = n;
}
function checkofclick(n) {
    if (isDec) {
        if (n !== 0) {
            dec(n);
        } else {
            isDec = false;
            inc(n);
        }
    } else {
        if (n < 10) {
            inc(n);
        } else if (n >= 10) {
            isDec = true
            dec(n)
        }
    }
}
let item = 0;
function list(item) {
    while (item < 10) {
        $("#itemlist").append(`<li> тут должно было быть число </li>`);
        item++;
        console.log($item)
    }
}
function addElement() {
    let text = prompt('Введите название элемента')
    console.log(text);

    let html = `
      <li>

        <div class"itemlist">
          <span class='target' onmouseenter="toggleColor(this, true)" onmouseleave="toggleColor(this)">
            ${text}
          </span>
        <button class="delete" onclick="deleteElement(this.parentNode.parentNode)">x</button>

          </div>
      </li>`;

      $('#itemlist').append(html);
}

function deleteElement(element) {
  

    console.log("Удалить элемент");
    console.log(element);

    $(element).replaceWith();
}

function toggleColor(element, active = false) {
    console.log(element, active);

    let activeColor = 'red';
    let defaultColor = '#333';

     if (active) {
        $(element).css('color', activeColor);
    } else {
        $(element).css('color', defaultColor);
    }


}

let menuLinks = [
    'Home',
    'Media',
    'Contancs',
    'Follow',
];

function generateMenulinks() {

  let html = '';

  for (const item of menuLinks){
      html += `
        <li>
          <a>${item}</a>
        </li>

      `;
  }

  return html;

}

  let user = '';

$(function () {
  console.log('Hello world');

  generateMenulinks();

  $('#menuLinks').append(generateMenulinks());

  if (!localStorage.getItem('name')) {         // - существует ли ящик? (true | foulse)
      localStorage.setItem ('name', 'Игорь'); // - если значение выше true (!foulse)
  } else {                                    // - выполни условие   
      user = localStorage.getItem('name');

  }


  $('#userName').html(user);


  // $('button').on('click', function () {

  //     let text = $(this).text().trim();

  //     switch (text) {
  //       case "Скрыть":  // if (text === 'Скрыть') {}
  //         toggleColor();
  //       case "Показать"
  //         toggleColor();
  //           break;

  //       case "Ввести данные":
  //         console.log(text);
  //         break;

  //     }
  // });

});




function buyphone() {  
  let cash = prompt("Доступная сумма");
  let phone = prompt("Стоимость телефона");
  let aks = prompt("Стоимость акссесуара");
  const TAX_RATE = 0.08;
  let quantity_phone = 0;


  while ( cash > (phone - (phone * TAX_RATE))) {
    
      cash = cash - phone - (phone * TAX_RATE)
      quantity_phone++
    
  } 

  console.log("Вы купили " + quantity_phone + " телефонов!");
  console.log("Ваша сдача " + cash);
}