function init() {
  var count = prompt('Введите пожалуйста число, которое будет определять длинну стороны квадратного поля, в количестве квадратов от 20 до 100 включительно:');
  if(count >= 20 && count <= 100) {
    alert('Доставьте оранжевый кубик в нижний правый угол.');
    alert('И ещё кое что))) Если вы открыли эту ссылку с телефона, то это не так интересно, как могло бы быть))) Рекомендую, открыть её с ноутбука или компьютера и ввести значение 100 и тогда по завершении предыдущего условия, вы увидите мультик!')
  } else if(isNaN(count)) {
    alert('Будьте пожалуйста внимательнее, вы ввели не число. Попробуйте ещё раз!');
    init();
  } else {
    alert('Вы ввели число не удовлетворяющие условиям. Число не может иметь орицательное значение или значение меньше 20 и более 100. Будьте бдительны! Попробуйте ещё раз!');
    init();
  };
  return count;
};

var count = init();
// var count = 20;

var wrapper = document.querySelector('.wrapper');
var h3 = document.querySelector('.h3');
var buttonsTouch = document.querySelectorAll('.button');
var buttonWrapper = document.querySelector('.button__wrapper');

function changeDisplayDom() {
  h3.classList.remove('none');
  wrapper.classList.remove('none');
  buttonWrapper.classList.remove('none');
};
changeDisplayDom();

function renderActiveX(count) {
  var min = 0;
  var max = count;
  return Math.floor(Math.random() * (max - min)) + min;
};

function renderActiveY(count) {
  var min = 0;
  var max = count;
  return Math.floor(Math.random() * (max - min)) + min;
};

const active = {
  x: 0,
  y: 0
};

const wall = {
  x: 0,
  y: 0,
}

var cubeMatrix = [];

var cell = {
  active: false,
  wall: false,
  road: false
};

var yellowCubePosition = {
  x: 0,
  y: 0
};

var direction = {
  LEFT: {
    name: 'Left',
    x: -1,
    y: null
  },
  TOP: {
    name: 'Top',
    x: null,
    y: -1
  },
  RIGHT: {
    name: 'Right',
    x: 1,
    y: null
  },
  BUTTOM: {
    name: 'Bottom',
    x: null,
    y: 1,
  }
}

var buttons = {
  37: direction.LEFT,
  65: direction.LEFT,
  38: direction.TOP,
  87: direction.TOP,
  39: direction.RIGHT,
  68: direction.RIGHT,
  40: direction.BUTTOM,
  83: direction.BUTTOM,
};

function stampsFinish() {
  var $cubes = wrapper.querySelectorAll('.cube');
  $cubes.forEach(function(cube, idx){
    if(idx === ((count**2) - 1)) {
      $cubes[idx].classList.add('finish');
      $cubes[idx].innerHTML = '⚑';
    };
  });
};

function renderWrapperDom() {
  cubeMatrix.forEach(function(row) {
    const $row = document.createElement('div');
    $row.classList.add('row');
    row.forEach(function(cell) {
      const $cell = document.createElement('div')
      $cell.classList.add('cube');
      if(cell.active) {
        $cell.classList.add('yellow');
      }else if(cell.wall) {
        $cell.classList.add('wall');
      }
      $row.append($cell);
    });
    wrapper.append($row);
  });
  wrapper.style.width = 50 * count + 'px';
  wrapper.style.height = 50 * count  + 'px';
  stampsFinish()
};

function renderСubeMatrix(){
  for (let y = 0; y < count; y++) {
    const row = [];
    wall.x = renderActiveX(count);
    wall.y = renderActiveY(count);
    wall.z = renderActiveY(count);
    wall.a = renderActiveY(count);
    wall.b = renderActiveY(count);
    wall.c = renderActiveY(count);
    wall.d = renderActiveY(count);
    wall.e = renderActiveY(count);
    wall.f = renderActiveY(count);
    wall.g = renderActiveY(count);
    wall.h = renderActiveY(count);
    wall.i = renderActiveY(count);
    wall.j = renderActiveY(count);
    wall.k = renderActiveY(count);
    wall.l = renderActiveY(count);
    wall.m = renderActiveY(count);
    wall.n = renderActiveY(count);
    wall.o = renderActiveY(count);
    wall.p = renderActiveY(count);
    wall.q = renderActiveY(count);
    wall.r = renderActiveY(count);
    wall.s = renderActiveY(count);
    wall.t = renderActiveY(count);
    wall.u = renderActiveY(count);
    wall.v = renderActiveY(count);
    for (let x = 0; x < count; x++) {
      const copyCell = Object.assign({}, cell);
      if(x === count - 1 && y === count - 1 || x === count - 2 && y === count - 1 || x === count - 1 && y === count - 2 || x === count - 2 && y === count - 2) {
        copyCell.wall = false;
      }else if(x === 1 && y === 0 || x === 1 && y === 1 || x === 0 && y === 1) {
        copyCell.wall = false;
      }else if(active.y === y && active.x === x){
        copyCell.active = true;
      }else if(x === wall.x) {
        copyCell.wall = true;
      }else if(x === wall.y) {
        copyCell.wall = true;
      }else if(x === wall.z) {
        copyCell.wall = true;
      }else if(x === wall.e && count >= 20) {
        copyCell.wall = true;
      }else if(x === wall.a) {
        copyCell.wall = true;
      }else if(x === wall.f && count >= 25) {
        copyCell.wall = true;
      }else if(x === wall.b) {
        copyCell.wall = true;
      }else if(x === wall.c) {
        copyCell.wall = true;
      }else if(x === wall.g && count >= 30) {
        copyCell.wall = true;
      }else if(x === wall.d) {
        copyCell.wall = true;
      }else if(x === wall.h && count >= 35) {
        copyCell.wall = true;
      }else if(x === wall.i && count >= 40) {
        copyCell.wall = true;
      }else if(x === wall.k && count >= 45) {
        copyCell.wall = true;
      }else if(x === wall.l && count >= 50) {
        copyCell.wall = true;
      }else if(x === wall.m && count >= 55) {
        copyCell.wall = true;
      }else if(x === wall.n && count >= 60) {
        copyCell.wall = true;
      }else if(x === wall.o && count >= 65) {
        copyCell.wall = true;
      }else if(x === wall.p && count >= 70) {
        copyCell.wall = true;
      }else if(x === wall.q && count >= 75) {
        copyCell.wall = true;
      }else if(x === wall.r && count >= 80) {
        copyCell.wall = true;
      }else if(x === wall.s && count >= 85) {
        copyCell.wall = true;
      }else if(x === wall.t && count >= 90) {
        copyCell.wall = true;
      }else if(x === wall.u && count >= 95) {
        copyCell.wall = true;
      }else if(x === wall.v && count >= 100) {
        copyCell.wall = true;
      }; 
      row.push(copyCell);
    };
    cubeMatrix.push(row)
  };
  renderWrapperDom();
};
renderСubeMatrix();

function wrapperRemove() {
  var rows = wrapper.querySelectorAll('.row');
  var $rows = [];
  rows.forEach(function(row){
    $rows.push(row);
  });
  $rows.forEach(function(row){
    row.remove();
  });
  $rows.splice(0,count);
};

function initYellowCubePosition(){
  for(var y = 0; y < cubeMatrix.length; y++){
    var row = cubeMatrix[y];
    for(var x = 0; x < count; x++){
      if(row[x].active) {
        yellowCubePosition.x = x;
        yellowCubePosition.y = y;
      };
    };
  };
};

function moveCellActive(params) {
  initYellowCubePosition();
  for(var y = 0; y < cubeMatrix.length; y++){
    if(y === yellowCubePosition.y + params.y) {
      var activeRow = cubeMatrix[y - params.y];
      var row = cubeMatrix[y];
      if(params.y !== null){
        for(var x = 0; x < count; x++){
          if(row[x].wall) {
          }else {
            activeRow[x].active = false;
          };
        };
      };
      for(var x = 0; x < count; x++) {
        if(x === yellowCubePosition.x + params.x) {
          if(row[x].wall){
          }else {
            row[x - params.x].active = false;
            row[x].active = true;
            yellowCubePosition.x = x;
            yellowCubePosition.y = y;
            break;
          };
        };
      };
      break;
    };
  };
  wrapperRemove();
  renderWrapperDom();
};

function getFinish(){
  cubeMatrix.forEach(function(row, id){
    row.forEach(function(cell, idx){
      if(cell.active && idx === 99 && id === 99) {
        alert('Ты молодец!!! Если ты и правда расчитывал увидеть мультфильм, то зачитай Притчи 14:15 и возьми с полки пирожок ;-)))');
      }else if(cell.active && idx === count - 1 && id === count - 1) {
        alert('Ты молодец! Возьми с полки пирожок)))')
      };
    });
  });
};


// cubeMatrix.forEach(function(row, idx){
//   var rows = [];
//   row.forEach(function(cell){
//     rows.push(cell);
//     rows.addEventListener('click', function(event){
//         rows.forEach(function(cube, idx){
//         if(rows[idx].active) {
//           rows[idx].active = false;
//         };
//       });
//       event.target.active = true;
//       initYellowCubePosition();
//     });
//   });
// });

// var cubes = wrapper.querySelectorAll('.cube');
// cubes.forEach(function(cube, idx){
//   cube.addEventListener('click', function(event){
//     cubeMatrix.forEach(function(row, idx){
//     console.log(cubeMatrix[idx].active)

//       if(cubeMatrix[idx].active) {

//         cubeMatrix[idx].active = false;
//       };
//     });
//     console.log(event.target)
//     event.target.classList.add('yellow');
//     initYellowCubePosition();
//   });
// });

document.addEventListener('keydown', function(e){
  initYellowCubePosition();
  if(buttons[e.keyCode]) {
    moveCellActive(buttons[e.keyCode]);
    reactTouchOn(buttons[e.keyCode].name);
  };
});

document.addEventListener('keyup', function(e){
  if(buttons[e.keyCode]) {
    reactTouchOff(buttons[e.keyCode].name);
    getFinish();
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
  initYellowCubePosition();
  buttonsTouch.forEach(function(buttonTouch, idx) {
    buttonsTouch[idx].addEventListener('click', function(e) {
      if(e.target) {
        moveCellActive(buttons[e.target.dataset.keycode]);
        getFinish();
      };
    });
  });
};

buttonsTouchClick();
initYellowCubePosition();