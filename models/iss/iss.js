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
  gltf.scene.scale.set(0.01, 0.01, 0.01);
  scene.add(gltf.scene);
  updateISSPosition(gltf);
}

async function updateISSPosition(gltf) {
  const ISSCoordinates = await getCoordinates();
  const ISSCoordinatesInEarth = getRenderCoordinates(ISSCoordinates);
  gltf.scene.position.z = ISSCoordinatesInEarth.z;
  gltf.scene.position.x = ISSCoordinatesInEarth.x;
  gltf.scene.position.y = ISSCoordinatesInEarth.y;
  if (isFirstRender) centerCameraToISS(gltf.scene, ISSCoordinatesInEarth);
  setTimeout(() => updateISSPosition(gltf), 3100);
}

function centerCameraToISS(mesh, ISSCoordinatesInEarth){
  isFirstRender = false;
  gsap.to( camera.position, {
    duration: 3,
    x: ISSCoordinatesInEarth.x,
    y: ISSCoordinatesInEarth.y,
    z: ISSCoordinatesInEarth.z,
    onUpdate: function() {
      camera.lookAt( mesh.position );
    }
  });
}

export default loadISS;
