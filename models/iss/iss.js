import scene from '../../app/scene.js';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from '/jsm/loaders/DRACOLoader.js';

const ISSGltf = "models/iss/gltf/iss.gltf";
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/libs/draco/");
loader.setDRACOLoader( dracoLoader );

function loadISS() {
  loader.load(ISSGltf, (gltf) => {
    gltf.scene.position.x = 0.8;
    gltf.scene.scale.set(0.01, 0.01, 0.01);
    setISS(gltf.scene);
  }, undefined, (error) => {
    console.error(error);
  });
}

function setISS(mesh) {
  scene.add(mesh);
}


export default loadISS;
