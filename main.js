var wrapper = document.querySelector('.wrapper');
var rows = document.querySelectorAll('.row');

var buttonsTouch = document.querySelectorAll('.button');

function user() {
  var num = prompt('Введите пожалуйста число, которое будет определять длинну стороны квадратного поля, в количестве квадратов:');
  if(num >= 2) {
    newRow(num)
    function newRow(num){
      var h3 = document.querySelector('.h3');
      var buttonWrapper = document.querySelector('.button__wrapper');
      h3.classList.remove('none');
      wrapper.classList.remove('none');
      buttonWrapper.classList.remove('none');
      for(var i = 0; i < rows.length;i++){
        if(rows.length < num) {
          if (rows[i].classList.contains('yellow')) {
          } else {
            var newRow = rows[i + 1].cloneNode(true);
            wrapper.append(newRow);
            rows = wrapper.querySelectorAll('.row');
          };
        };
      };
      rows.forEach(function(row){
        var cubes = row.querySelectorAll('.cube');
        for(var i = 0; i < cubes.length; i ++) {
          if(cubes.length < num) {
            var newCube = document.createElement('div');
            newCube.classList.add('cube');
            row.append(newCube);
            cubes = row.querySelectorAll('.cube');
            wrapper.style.width = 50 * num + 'px';
            wrapper.style.height = 50 * num  + 'px';
          };
        };
      })
    };
  } else if(isNaN(num)) {
    alert('Будьте пожалуйста внимательнее, вы ввели не число. Попробуйте ещё раз!');
  } else {
    alert('Вы ввели число не удовлетворяющие условиям. Число не может иметь орицательное значение или значение меньше 2.Будьте бдительны! Попробуйте ещё раз!');
  }
}
user();

var buttons = {
  37: {
    name: 'Left',
    x: -1,
    y: null
  },
  65: {
    name: 'Left',
    x: -1,
    y: null
  },
  38: {
    name: 'Top',
    x: null,
    y: -1
  },
  87: {
    name: 'Top',
    x: null,
    y: -1
  },
  39: {
    name: 'Right',
    x: 1,
    y: null
  },
  68: {
    name: 'Right',
    x: 1,
    y: null
  },
  40: {
    name: 'Bottom',
    x: null,
    y: 1
  },
  83: {
    name: 'Bottom',
    x: null,
    y: 1
  }
};

var yellowCubePosition = {
  x: 0,
  y: 0
};

function initYellowCubePosition(){
  for(var y = 0; y < rows.length; y++){
    var rowCubes = rows[y].querySelectorAll('.cube')
    for(var x = 0; x < rowCubes.length; x++){
      if(rowCubes[x].classList.contains('yellow')) {
        yellowCubePosition.x = x;
        yellowCubePosition.y = y;
      };
    };
  };
};

function moveCube(params){
  var yellowCube = wrapper.querySelector('.yellow');
  for(var y = 0; y < rows.length; y++){
    if(y === yellowCubePosition.y + params.y) {
      var rowCubes = rows[y].querySelectorAll('.cube')
      for(var x = 0; x < rowCubes.length; x++) {
        if(x === yellowCubePosition.x + params.x) {
          rowCubes[x].classList.add('yellow');
          yellowCube.classList.remove('yellow');
          yellowCubePosition.x = x;
          yellowCubePosition.y = y;
          break;
        };
      };
      break;
    };
  };
};

document.addEventListener('keydown', function(e){
  if(buttons[e.keyCode]) {
    moveCube(buttons[e.keyCode]);
    reactTouchOn(buttons[e.keyCode].name);
  };
});

document.addEventListener('keyup', function(e){
  if(buttons[e.keyCode]) {
    reactTouchOff(buttons[e.keyCode].name);
  };
});

function reactTouchOn(params) {
  for(var i = 0; i < buttonsTouch.length; i++){
    if(buttonsTouch[i].innerHTML === params) {
      buttonsTouch[i].classList.add('active');
    };
  };
};

function reactTouchOff(params) {
  for(var i = 0; i < buttonsTouch.length; i++){
    if(buttonsTouch[i].innerHTML === params) {
      buttonsTouch[i].classList.remove('active');
    };
  };
};

function buttonsTouchClick() {
  buttonsTouch.forEach(function(buttonTouch, idx) {
    buttonsTouch[idx].addEventListener('click', function(e) {
      if(e.target) {
        moveCube(buttons[e.target.dataset.keycode]);
      };
    });
  });
};

buttonsTouchClick();
initYellowCubePosition();