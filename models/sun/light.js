import * as THREE from '/build/three.module.js';

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(9, 3, 5);
const Helper = new THREE.PointLightHelper(pointLight);

export {ambientLight, pointLight, Helper};
