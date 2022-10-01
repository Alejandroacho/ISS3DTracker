import * as THREE from '/build/three.module.js';
import camera from './camera.js';
import earthMesh from '../models/earth/earth.js';
import starMesh from '../models/galaxy/galaxy.js';
import cloudMesh from '../models/clouds/clouds.js';
import loadISS from '../models/iss/iss.js';
import {ambientLight, pointLight} from '../models/sun/light.js';

const scene = new THREE.Scene();
scene.add(camera);
scene.add(earthMesh);
scene.add(ambientLight);
scene.add(pointLight);
scene.add(starMesh);
scene.add(cloudMesh);
loadISS();

export default scene;
