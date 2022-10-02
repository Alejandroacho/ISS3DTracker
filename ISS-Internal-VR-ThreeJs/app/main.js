import scene from './scene.js';
import renderer from './renderer.js';
import controls from './controls.js';
import camera from './camera.js';
import { VRButton } from '/jsm/webxr/VRButton.js';

// handling resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}, false);

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

const render = () => {
  renderer.xr.enabled = true;

  document.body.appendChild( VRButton.createButton( renderer ) );

  renderer.render(scene, camera);
}

animate();