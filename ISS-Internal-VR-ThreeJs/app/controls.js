import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import camera from './camera.js';
import renderer from './renderer.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.minDistance = 0.1;
controls.maxDistance = 4;
controls.enablePan = false;
controls.enableDamping = true;



export default controls;
