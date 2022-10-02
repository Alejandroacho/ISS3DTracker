
// import scene from '../../../app/scene.js';


// import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';
// import {DRACOLoader} from '/jsm/loaders/DRACOLoader.js';

import { FBXLoader } from '/jsm/loaders/FBXLoader.js';

const ISS_model = "models/iss/interior/ISS_Interior_USOnly_TexturesPacked.fbx";

const loader = new FBXLoader()


// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("/libs/draco/");
// loader.setDRACOLoader( dracoLoader );

function loadISS(scene) {

  loader.load(
    ISS_model, (object) => {
      // console.log(object)
      object.position.x = -1;
      object.position.y = -0.1;
      object.position.z = -0.1;
      object.scale.set(0.01, 0.01, 0.01);

      scene.add(object);
      // setISS(object.scene);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      console.log(error)
    }
  )


  // loader.load(ISSGltf, (gltf) => {
  //   gltf.scene.position.x = -1;
  //   gltf.scene.position.y = -0.1;
  //   gltf.scene.position.z = -0.1;
  //   gltf.scene.scale.set(0.01, 0.01, 0.01);
  //   setISS(gltf.scene);
  // }, undefined, (error) => {
  //   console.error(error);
  // });
}



// function setISS(mesh) {
//   scene.add(mesh);
// }


export default loadISS;
