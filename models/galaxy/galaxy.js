import * as THREE from '/build/three.module.js';

const galaxyTexture = 'models/galaxy/textures/galaxy.png'
const starGeometry = new THREE.SphereGeometry(80, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture(galaxyTexture),
    side: THREE.BackSide
});
const starMesh = new THREE.Mesh(starGeometry, starMaterial);

export default starMesh;