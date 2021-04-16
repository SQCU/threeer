//gotime.js
//drawing from fermat, etc 

//ok if you do this you get problems right away lole
//import * as THREE from 'js/node_modules/three/build/three';
//this one from the docs doesn't work either
//import * as THREE from 'three';

console.log("bzzz");
let start;
let last = Date.now();	//There ought to be a better way.  I still don't like it.

//init scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//init demo object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xDE0FAD } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

//function scalecanv(canvas) {	//doesn't work lol
//canvas.width = canvas.offsetWidth;	
//canvas.height = canvas.offsetHeight;
//}

var spinnyx = 1/500;
var spinnyy = 1/1300;
var accx = 1/210000;
var accy = 1/1730000;


function kinematics (runtime) {
	//console.log(typeof(runtime));
	//console.log("elapsed time:"+runtime+" ms");
let finna = Math.log(runtime)/1000;
	//console.log(typeof(runtime));
	//console.log("finna:"+runtime);
	spinnyx = spinnyx+accx; 
	spinnyy = spinnyy+accy;
}

const animate = function (timestamp) {
requestAnimationFrame( animate );	//callback
//timing
if(start === undefined)
	start = timestamp;
const elapsed = timestamp - start;
const current = timestamp;

//acceleration saga
kinematics(elapsed);

//the cube with the rube
cube.rotation.x += spinnyx;
cube.rotation.y += spinnyy;

renderer.render( scene, camera );
};

//this is where the callback goblin gets summoned
animate();