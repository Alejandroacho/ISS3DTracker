import * as THREE from '/build/three.module.js';

const mapTexture = 'models/earth/texture/earthmap4k.jpg'
const bumpTexture = 'models/earth/texture/earthbump4k.jpg'
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  map: THREE.ImageUtils.loadTexture(mapTexture),
  bumpMap: THREE.ImageUtils.loadTexture(bumpTexture),
  bumpScale: 0.3
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

export default earthMesh;
