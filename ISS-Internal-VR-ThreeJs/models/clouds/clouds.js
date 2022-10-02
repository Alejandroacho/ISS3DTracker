import * as THREE from '/build/three.module.js';

const cloudTexture = "models/clouds/textures/cloud.png"
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
const cloudMaterial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture(cloudTexture),
    transparent: true,
});
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);

export default cloudMesh;
