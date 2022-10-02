import * as THREE from '/build/three.module.js';

const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.009;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

export default camera;
