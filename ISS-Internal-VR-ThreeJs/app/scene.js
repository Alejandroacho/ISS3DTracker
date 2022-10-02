import * as THREE from '/build/three.module.js';
import camera from './camera.js';
import earthMesh from '../models/earth/earth.js';
import starMesh from '../models/galaxy/galaxy.js';
import cloudMesh from '../models/clouds/clouds.js';
import loadISS from '../models/iss/interior/iss.js';
import { ambientLight, pointLight } from '../models/sun/light.js';

const scene = new THREE.Scene();
scene.add(camera);
scene.add(pointLight);
scene.add(starMesh);

controller1 = renderer.xr.getController(0);
controller1.addEventListener('selectstart', onSelectStart);
controller1.addEventListener('selectend', onSelectEnd);
controller1.addEventListener('squeezestart', onSqueezeStart);
controller1.addEventListener('squeezeend', onSqueezeEnd);
controller1.userData.painter = painter1;
scene.add(controller1);

controller2 = renderer.xr.getController(1);
controller2.addEventListener('selectstart', onSelectStart);
controller2.addEventListener('selectend', onSelectEnd);
controller2.addEventListener('squeezestart', onSqueezeStart);
controller2.addEventListener('squeezeend', onSqueezeEnd);
controller2.userData.painter = painter2;
scene.add(controller2);


loadISS();

export default scene;
