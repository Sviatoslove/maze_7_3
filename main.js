var cubeMatrix = [];
var rows = [];
var cubes = [];

var Y = {
  active: false,
  wall: false
};

var X = {
  active: false,
  wall: false
};

function init() {
  var num = prompt('Введите пожалуйста число, которое будет определять длинну стороны квадратного поля, в количестве квадратов:');
  var min = 1;
  if(num >= 2) {
    function createCubeMatrix (num, obj, newObj) {
      for(i = 0; i < num; i ++) {
        var el = Object.assign({}, obj);
        if(((i - 1) % 3) - 1 == 0 && i > 0) {
          el.wall = true;
        };
        newObj.push(el);
      };
      cubeMatrix.push(newObj);
    };

    createCubeMatrix(num, Y, rows)
    createCubeMatrix(num, X, cubes)
    
    function initYellowCube(c){
      var cubes = document.querySelectorAll('.cube');
      for(var i = 0; i < cubes.length; i++){
        if(i === c) {
          cubes[i - 1].classList.add('yellow');
          break;
        };
      };
    };

    function randomC(min, num) {
    min = Math.ceil(min);
    max = Math.floor(num**2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var c = randomC(min, num);

    function render (arr, num) {
      var wrapper = document.querySelector('.wrapper');
      var h3 = document.querySelector('.h3');
      var buttonWrapper = document.querySelector('.button__wrapper');
      h3.classList.remove('none');
      wrapper.classList.remove('none');
      buttonWrapper.classList.remove('none');
      arr.forEach(function(el, idx) {
        if(idx === 0) {
          arr[idx].forEach(function(item){
          var div = document.createElement('div')
          div.classList.add('row');
          wrapper.append(div);
          });
        } else {
          var rows = document.querySelectorAll('.row');
          rows.forEach(function(z){
            arr[idx].forEach(function(item){
              var cube = document.createElement('div');
              cube.classList.add('cube');
              z.append(cube);
            });
          });
        };
      });
      wrapper.style.width = 50 * num + 'px';
      wrapper.style.height = 50 * num  + 'px';
      initYellowCube(c);
    };
    
    render(cubeMatrix, num);
    
  } else if(isNaN(num)) {
    alert('Будьте пожалуйста внимательнее, вы ввели не число. Попробуйте ещё раз!');
    init();
  } else {
    alert('Вы ввели число не удовлетворяющие условиям. Число не может иметь орицательное значение или значение меньше 2. Будьте бдительны! Попробуйте ещё раз!');
    init();
  }
}
init();

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

var yellowCubePosition = {
  x: 0,
  y: 0
};

var wrapper = document.querySelector('.wrapper');
var rows = document.querySelectorAll('.row');
var buttonsTouch = document.querySelectorAll('.button');

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

var cubes = wrapper.querySelectorAll('.cube');
cubes.forEach(function(cube, idx){
  cube.addEventListener('click', function(event){
    cubes.forEach(function(cube, idx){
      if(cubes[idx].classList.contains('yellow')) {
        cubes[idx].classList.remove('yellow')
      };
    });
    event.target.classList.add('yellow');
    initYellowCubePosition();
  });
});

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