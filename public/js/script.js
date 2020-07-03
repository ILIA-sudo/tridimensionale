// window.onload = function () {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const canvas = document.getElementById('canvas');

//   canvas.setAttribute('width', width);
//   canvas.setAttribute('height', height);

//   const ball = {
//     positionZ: 0,
//     rotationY: 0,
//   };

//   const gui = new dat.gui.GUI();
//   gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
//   gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);

//   const renderer = new THREE.WebGLRenderer({ canvas });
//   renderer.setClearColor(0x000000);

//   const scene = new THREE.Scene();

//   //угол обзора 45 градусов
//   const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
//   camera.position.set(0, 0, 1000);


//   const light = new THREE.AmbientLight(0xffffff);
//   scene.add(light);

//   const geometry = new THREE.SphereGeometry(250, 15, 25);
//   const material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors, wireframe: true });

//   for (let i = 0; i < geometry.faces.length; i += 1) {
//     geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
//   }


//   const mesh = new THREE.Mesh(geometry, material);
//   scene.add(mesh);

//   function loop() {
//     mesh.position.z += ball.positionZ;
//     mesh.rotation.y += ball.rotationY;

//     renderer.render(scene, camera);
//     requestAnimationFrame(function () { loop(); });

//   }

//   loop()

// };


// const createButton = document.getElementById('createbutton');

// createButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('YES');

//   function q() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const canvas = document.getElementById('canvas');

//     canvas.setAttribute('width', width);
//     canvas.setAttribute('height', height);

//     const ball = {
//       positionZ: 0,
//       rotationY: 0,
//     };

//     const gui = new dat.gui.GUI();
//     gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
//     gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);

//     const renderer = new THREE.WebGLRenderer({ canvas });
//     renderer.setClearColor(0x000000);

//     const scene = new THREE.Scene();

//     //угол обзора 45 градусов
//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
//     camera.position.set(0, 0, 1000);


//     const light = new THREE.AmbientLight(0xffffff);
//     scene.add(light);

//     const geometry = new THREE.SphereGeometry(250, 15, 25);
//     const material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors, wireframe: true });

//     for (let i = 0; i < geometry.faces.length; i += 1) {
//       geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
//     }


//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     function loop() {
//       mesh.position.z += ball.positionZ;
//       mesh.rotation.y += ball.rotationY;

//       renderer.render(scene, camera);
//       requestAnimationFrame(function () { loop(); });

//     }

//     loop()

//   };
//   q()
// });

const cvs = document.getElementById('canvas');
// document.body.appendChild(cvs);
const ctx = cvs.getContext('2d');

const bg = new Image();
const plane = new Image();
const octopus = new Image();
const octopus2 = new Image();
const octopus3 = new Image();
const octopus4 = new Image();
const octopus5 = new Image();

bg.src = 'images/background.jpg';
plane.src = 'images/plane.jpg';
octopus.src = 'images/octopus.jpg';
octopus2.src = 'images/octopus2.jpg';
octopus3.src = 'images/octopus3.jpg';
octopus4.src = 'images/octopus4.jpg';
octopus5.src = 'images/octopus5.jpg';

let planeX = 10;
let planeY = 150;
const fall = 1;
const move = 1;

let octoX = 900;
let octoY = 462;
let fallOcto = Math.random() * (13 - 1 + 8);
// const moveOcto = Math.random() * (3 - 1 + 1);

let octo2X = 700;
let octo2Y = 0;
let fallOcto2 = Math.random() * (13 - 1 + 8);
// const moveOcto2 = Math.random() * (4 - 1 + 1);

let octo3X = 550;
let octo3Y = 462;
let fallOcto3 = Math.random() * (13 - 1 + 8);

let octo4X = 390;
let octo4Y = 0;
let fallOcto4 = Math.random() * (13 - 1 + 8);

let octo5X = 250;
let octo5Y = 462;
let fallOcto5 = Math.random() * (13 - 1 + 8);

function moveUp() {
  planeY -= 35;
}
function moveFast() {
  planeX += 35;
}
function moveReverse() {
  planeX -= 35;
}
function moveSpeedDown() {
  planeY += 35;
};


document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyW') {
    moveUp();
  }
  if (event.code === 'KeyS') {
    moveFast();
  }
  if (event.code === 'KeyA') {
    moveReverse();
  }
  if (event.code === 'KeyD') {
    moveSpeedDown();
  }
});

function game() {
  ctx.drawImage(bg, 0, 0);
  // ctx.shadowColor = '#F00';

  let points = 0;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 5;
  ctx.strokeStyle = '#F00';
  ctx.font = '50px';
  ctx.strokeText('Incredible journey through octos', 10, 10);
  ctx.strokeText(`Score: ${points}`, 10, 20);

  ctx.drawImage(plane, planeX, planeY);
  planeY += fall;
  planeX += move;

  ctx.drawImage(octopus, octoX, octoY);
  octoY -= fallOcto;
  // octoX -= moveOcto;

  ctx.drawImage(octopus2, octo2X, octo2Y);
  octo2Y -= fallOcto2;
  // octo2X -= moveOcto2;

  ctx.drawImage(octopus3, octo3X, octo3Y);
  octo3Y -= fallOcto3;

  ctx.drawImage(octopus4, octo4X, octo4Y);
  octo4Y -= fallOcto4;

  ctx.drawImage(octopus5, octo5X, octo5Y);
  octo5Y -= fallOcto5;

  if (octoY < 0) {
    fallOcto = -fallOcto;
  }
  if (octoY > 462) {
    fallOcto = -fallOcto;
  }

  if (octo2Y < 0) {
    fallOcto2 = -fallOcto2;
  }
  if (octo2Y > 462) {
    fallOcto2 = -fallOcto2;
  }

  if (octo3Y < 0) {
    fallOcto3 = -fallOcto3;
  }
  if (octo3Y > 462) {
    fallOcto3 = -fallOcto3;
  }

  if (octo4Y < 0) {
    fallOcto4 = -fallOcto4;
  }
  if (octo4Y > 462) {
    fallOcto4 = -fallOcto4;
  }

  if (octo5Y < 0) {
    fallOcto5 = -fallOcto5;
  }
  if (octo5Y > 462) {
    fallOcto5 = -fallOcto5;
  }

  if (planeX === octo5X || planeY === octo5Y) {
    points += 50;
    alert('catching!')
    location.reload();
    clearInterval(500);

  }
  if (planeX === octo4X || planeY === octo4Y) {
    points += 50;
    alert('catching!')
    location.reload();
    clearInterval(500);
  }


  if (planeX === octo3X || planeY === octo3Y || planeX === octo2X || planeY === octo2Y || planeX === octoX || planeY === octoY) {
    points += 50;
    alert('catching!')
    location.reload();
    clearInterval(500);
  }

  // if (octoY + octopus.width < cvs.top) {
  //   octoY = -octoY;
  // }


  if (planeX > 1000 || planeY > 562) {
    clearInterval(game);
    alert('win');
    location.reload();
  }

  requestAnimationFrame(game);
}

octopus5.onload = game;


// const createButton = document.getElementById('createbutton');

// createButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('YES');
// }
