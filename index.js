let defaultNumber = 0;
let isDec = false;

const boxes = [{
    title: 'Заголовок 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum nibh arcu, et luctus tellus vulputate molestie. Quisque fringilla hendrerit feugiat. Cras eu tellus sed nisl euismod euismod. Sed molestie, dui quis convallis ultrices, mi leo hendrerit enim, in facilisis elit augue in orci. Suspendisse ut gravida augue. Maecenas eu ultrices ex. Nullam purus ipsum, suscipit et ligula nec, ultricies ullamcorper enim. Integer laoreet iaculis magna sit amet malesuada.',
    autor: 'Дарт Вейдер',
    hasButton: false,
  },
  {
    title: 'Заголовок 2',
    text: 'Nunc viverra tortor eget elementum tempor. Aenean tincidunt mauris sed pulvinar finibus. Nulla vehicula urna a ligula ullamcorper, nec malesuada mauris feugiat. Praesent dui ante, ultricies a lobortis facilisis, pretium id urna. Nullam quis efficitur lectus. Duis consequat ante nunc, a congue lectus congue nec. Mauris fringilla molestie nisl eu bibendum.',
    autor: 'Гендальф',
    hasButton: true,
  },
  {
    title: 'Заголовок 3',
    text: 'Quisque posuere eros et risus tristique accumsan. Curabitur eu consequat est. Etiam eleifend maximus dolor, sit amet cursus risus luctus et. Nunc interdum, tellus vel vestibulum luctus, lacus eros luctus dui, ut vulputate metus metus non quam. Pellentesque efficitur justo at turpis pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae arcu mollis, volutpat nunc sed, molestie leo. Donec sit amet erat fringilla sem sodales bibendum eu nec mauris. Suspendisse ut elit erat.',
    autor: 'Тони Старк',
    hasButton: false,
  }
];
function createCardBoxes() {
  let html = '';
  let button = `<div style="margin-left: 8px">
            <button>Подробнее</button>
          </div>`;
  for (const box of boxes) {
    html += `
    <div class="box-container">
      <div>
        <div class="box-title">
          ${box.title}
        </div>
        <div class="box-content">
          ${box.text}
        </div>
      </div>
      <div class="box-autor">
        <div>
          Автор :
        </div>
        <div class="autor">
          ${box.autor}
        </div>
        ${ hasButton(box.hasButton) }
      </div>
    </div>`;
  }
  function hasButton(box) {
    if (box) {
      return button;
    }
    return '';
  }
  $('#data_container').html(html);
}


// let blnc = $('#Balance').val();
// console.log(blnc);
let modalCounter = 0;
let polarCalcute = 0;

function createPopup (){
  console.log("консоль лог");

  let container = document.createElement('div'); // создаем див и записываем в переменную
  let textModal = prompt('показать всплывающее окно'); // записываем по нажатию кнокпи введенные данные

  let id = 'modal_' + modalCounter;
  
  container.classList.add('modal');
  container.setAttribute('id', id); // мы добавляем 

  container.innerHTML = 
    `<div class = "modal-content">
      <span class="close">&times;</span>
      <p>${textModal}</p>
    </div>`;

    modalCounter++;
    $('#modals').html(container);
    container.style.display = 'flex';
    let closeButton = $('#' + id).children().children('span'); //


    $(closeButton).on('click', function(){

        document.getElementById(id).remove();
    });


  console.log(container);
}

  function CalccreatePopup (){
 

  let Calccontainer = document.createElement('div'); // создаем див и записываем в переменную

  let CalctextModal = buyphone; // записываем по нажатию кнокпи введенные данные

  let divid = 'polar_' + polarCalcute;
  
  Calccontainer.classList.add('polar');
  Calccontainer.setAttribute('id', divid); // мы добавляем айди

  Calccontainer.innerHTML = 
    `<div class = "polar-content">
      <span class="close">&times;</span>

         <input id="Balance" type="number" placeholder="Введите доступную сумму"> <br>

          <input id="PhonePrice" type="number" placeholder="Введите стоимость телефона"> <br>

          <input id="AksPrice" type="number" placeholder="Введите стоимость акссесуара"> <br>

          <button class="button" onclick="buyphone()">Рассчитать</button> <br>

    </div>`;

    polarCalcute++;
    $('#polars').html(Calccontainer);
    Calccontainer.style.display = 'flex';
    let closeCalcute = $('#' + divid).children().children('span'); //


    $(closeCalcute).on('click', function(){

        document.getElementById(divid).remove();
    });

console.log(Calccontainer);
}



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
  //       case "Скрыть":  

  //       if (text === 'Скрыть') {}
  //         toggleColor();
  //       case "Показать"
  //         toggleColor();
  //           break;

  //       case "Ввести данные":
  //         console.log(text);
  //         break;

  //     }
  // });
$('#createPopup').on('click', function(){
  createPopup();
});

  $('#CalccreatePopup').on('click', function(){ 
    CalccreatePopup();
  });


});




function buyphone() {  
  let cash = $("#Balance").val();
  let phone = $("#PhonePrice").val();
  let aks = $("#AksPrice").val();
  cash = Number( cash );
  phone = Number( phone );
  aks = Number( aks );
  const TAX_RATE = 0.08;
  let quantity_phone = 0;
  let quantity_aks = 0;

  let SumWithTaks = phone + (phone * TAX_RATE);

  // console.log(cash);
  // console.log(phone);
  // console.log(aks);
  // console.log(SumWithTaks);


  while ( cash >= SumWithTaks ) {
    
      cash = cash - SumWithTaks
      quantity_phone++

      if (cash >= aks) {

    cash = cash - aks
    quantity_aks++
  }
    
  } 

  while (cash >= aks) {

    cash = cash - aks
    quantity_aks++

 }

 alert ("Вы купили " + quantity_phone + " телефонов!");

// alert ("Вы купили" + quantity_phone + "телефонов!"\n"Ваша сдача" + cash.toFixed( 2 )\n"У вас" + quantity_aks + "акссесуаров");
  


  console.log("Вы купили " + quantity_phone + " телефонов!");
  console.log("Ваша сдача " + cash.toFixed( 2 ));
  console.log("У вас " + quantity_aks + " акссесуаров");

}



$ ('#userName').html(user);



