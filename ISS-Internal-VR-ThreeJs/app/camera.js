import * as THREE from '/build/three.module.js';

const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.0001;
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

export default camera;
