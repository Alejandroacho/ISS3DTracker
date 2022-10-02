import scene from '../../app/scene.js';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from '/jsm/loaders/DRACOLoader.js';
import getCoordinates from './location.js';
import getRenderCoordinates from '../earth/location.js';
import camera from '../../app/camera.js';

const ISSGltf = "models/iss/gltf/iss.gltf";
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/libs/draco/");
loader.setDRACOLoader( dracoLoader );
var isFirstRender = true;

function loadISS() {
  loader.load(ISSGltf, (gltf) => {
    renderISS(gltf);
  }, undefined, (error) => {
    console.error(error);
  });
}

async function renderISS(gltf) {
  const ISSCoordinates = await getCoordinates();
  const ISSCoordinatesInEarth = getRenderCoordinates(ISSCoordinates);
  gltf.scene.rotation.z = -1.5;
  gltf.scene.position.x = ISSCoordinatesInEarth.x;
  gltf.scene.position.y = ISSCoordinatesInEarth.y;
  gltf.scene.scale.set(0.01, 0.01, 0.01);
  setISS(gltf.scene);
  console.log(isFirstRender)
  if (isFirstRender) {
    centerCameraToISS(gltf.scene, ISSCoordinatesInEarth);
    isFirstRender = false;
  }
  setTimeout(() => scene.remove(gltf.scene), 2100);
}

function setISS(mesh) {
  scene.add(mesh);
}


function renderISSEachSecond() {
  setTimeout(() => continuouslyRenderISS(), 2000);
}

function continuouslyRenderISS() {
  renderISSEachSecond();
  loadISS();
}

function centerCameraToISS(mesh, ISSCoordinatesInEarth){
  gsap.to( camera.position, {
    duration: 3,
    x: ISSCoordinatesInEarth.x,
    y: ISSCoordinatesInEarth.y,
    z: 0.5,
    onUpdate: function() {
      camera.lookAt( mesh.position );
    }
  } );
}

export default renderISSEachSecond;
