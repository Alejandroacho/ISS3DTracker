import scene from './scene.js';
import renderer from './renderer.js';
import controls from './controls.js';
import camera from './camera.js';


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
  renderer.render(scene, camera);
}

const vrButton = document.querySelector('#vr-button');

vrButton.addEventListener('click', () => {
  
  window.location.href ="https://isslocator.earth/vr/";
})

animate();