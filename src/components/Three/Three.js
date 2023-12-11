import * as THREE from 'three';
import "./Three.css";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap/all';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useState, useEffect, forwardRef, useRef} from 'react';
// import TWEEN from '@tweenjs/tween.js';
// import { Sky } from 'three/examples/jsm/objects/Sky.js';
// import Stats from 'animate/examples/jsm/libs/stats.module'

const ModelStart = forwardRef((props, ref, refProgress) => {
  const isReactSnap = navigator.userAgent.includes('ReactSnap');
  let pixelRatio = window.devicePixelRatio
  let AA = true
  if (pixelRatio > 1) {
    AA = false
  }
  const [scenes, setScenes] = useState([]);
  const [canvas] = useState(document.createElement('canvas'));
  const [camera] = useState(new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, .01, 15 ))
  const [renderer] = useState(
  new THREE.WebGLRenderer({ 
    canvas: canvas,
    alpha: false, 
    antialias: AA,
    powerPreference: "high-performance",
    precision: "highp",
  })
  )
  const frameIdRef = useRef(null);

  // const originalMaterials = {};
  
  let model, scene, exposure;
  const isFirstRender = useRef(true);

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    camera.aspect = rect.width/ rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  
  const stopAnimation = () => {
    if (frameIdRef.current) {
      cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = null;
      }
    };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Toggle the ref so it's false for next renders
      return;
  }
    stopAnimation();
  }, [props.click]); 

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        renderer.setSize(rect.width, rect.height);
        console.log("activated");
      }
    };
    const currentRef = ref.current;

    const resizeObserver = new ResizeObserver(handleResize);
    if (ref.current) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array, so the effect runs only once on mount


useEffect(() =>{
  canvas.className = 'render-item';
  if (!isReactSnap) {
  renderCanvas(props.i);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[props.i])


function renderThree() {
  return new Promise((resolve) => {
  resolve(init(props.name,props.i))
  });
}
async function renderCanvas(i) {
  await renderThree();
  if (props.click === null) {
    const div = document.getElementById(i+10);
    div.appendChild(canvas);
  } else {
    ref.current.appendChild(canvas);
  }
}

// FUNCTION START

function init(name, i) {

  scene = new THREE.Scene();
  scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
  scene.fog = new THREE.Fog( scene.background, 1, 5000 );

  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.toneMapping = THREE.LinearToneMapping ;
  // exposure = 1.2;
  // renderer.toneMappingExposure = exposure;
  renderer.setPixelRatio( window.devicePixelRatio );

// Materials

const material = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
})	

// Loading models
let decoderPath = 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/';
const loadingManager = new THREE.LoadingManager();
const loader = new GLTFLoader(loadingManager);
const draco = new DRACOLoader();
// draco.setDecoderConfig({type: 'js'});
draco.setDecoderPath(decoderPath);
loader.setDRACOLoader( draco );

loader.load("./gltf/floor.gltf", function (gltf) {
  model = gltf.scene;
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = material;
  });
  // gltf.scene.traverse((o) => {
  //   if (o.isMesh) {
  //   o.castShadow = true;
  //   o.receiveShadow = true;
  //   }
  // });
  scene.add(gltf.scene);
});

loader.load(name, function (gltf) {
  model = gltf.scene;
  // model.traverse((o) => {
  //   if (o.isMesh) {
  //   // Save the original material with the unique ID of the mesh as the key
  //   originalMaterials[o.id] = o.material;
  //   }
  //   });
  model.traverse((o) => {
    if (o.isMesh) o.material = material;
  });
  // model.traverse((o) => {
  //   if (o.isMesh) {
  //   o.castShadow = true;
  //   o.receiveShadow = true;
  //   }
  // });
  scene.add(model);
  for (let i = 0; i < model.children.length; i++) {
    const mesh = model.children[i];
    // mesh.geometry.computeTangents(); // generates bad data due to degenerate UVs
    const edges = new THREE.EdgesGeometry( mesh.geometry );
    let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ));
    line.material.opacity = 0.25;
    line.material.transparent = true;
    scene.add( line );
  }
});

camera.position.set(0,2,5);
camera.rotation.set(Math.PI/-14, 0, 0)
scene.userData.camera = camera;

function moveCamera (x, y, z) {
  gsap.to(camera.position,    {
    x,
    y, 
    z, 
    duration: 2
});}

function rotateCamera (x, y, z){
gsap.to(camera.rotation, {
  x,
  y,
  z,
  duration: 2
});}
let lightUp = "";
let lightDown = "";
let quantity = 2;

if (props.click === null) {
  document.getElementById(i+10).addEventListener("mouseover", function(){
    // model.traverse((o) => {
    //   if (o.isMesh) o.material = originalMaterials[o.id];
    // });
    // scene.add(model);
    moveCamera(0, 2, 4);
    rotateCamera(Math.PI/-10, 0, 0);
    lightUp = setInterval(lighting, 30)
    function lighting(){
    clearInterval(lightDown)
    if (quantity === 50) {
      clearInterval(lightUp)
    } else {
    dirLight.intensity = quantity+1;
    quantity = dirLight.intensity;
    }
    }
  });
  document.getElementById(i+10).addEventListener("mouseout", function(){
    // model.traverse((o) => {
    //   if (o.isMesh) o.material = material;
    // });
    // scene.add(model);
    moveCamera(0, 2, 5);
    rotateCamera(Math.PI/-14, 0, 0);
    clearInterval(lightUp);
    lightDown = setInterval(lighting, 30)
    function lighting(){
    if (quantity === 2) {
        clearInterval(lightDown)
    } else {
      dirLight.intensity = quantity-1;
      quantity = dirLight.intensity; 
    }
  }});
} else {
  ref.current.addEventListener("mouseover", function(){
    // model.traverse((o) => {
    //   if (o.isMesh) o.material = originalMaterials[o.id];
    // });
    // scene.add(model);
    moveCamera(0, 2, 4);
    rotateCamera(Math.PI/-10, 0, 0);
    lightUp = setInterval(lighting, 30)
    function lighting(){
    clearInterval(lightDown)
    if (quantity === 50) {
      clearInterval(lightUp)
    } else {
    dirLight.intensity = quantity+1;
    quantity = dirLight.intensity;
    }
    }
  });
  ref.current.addEventListener("mouseout", function(){
    // model.traverse((o) => {
    //   if (o.isMesh) o.material = material;
    // });
    // scene.add(model);
    moveCamera(0, 2, 5);
    rotateCamera(Math.PI/-14, 0, 0);
    clearInterval(lightUp);
    lightDown = setInterval(lighting, 30)
    function lighting(){
    if (quantity === 2) {
        clearInterval(lightDown)
    } else {
      dirLight.intensity = quantity-1;
      quantity = dirLight.intensity; 
    }
  }});
}

				// LIGHTS

				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );
				hemiLight.color.setRGB( 1, 1, 1 );
				hemiLight.groundColor.setRGB( 1, 1, 1 );
				hemiLight.position.set( 0, 50, 0 );
				scene.add( hemiLight );

				

				const dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( .6, 1, 1 );
				dirLight.position.multiplyScalar( 30 );
				scene.add( dirLight );

				// dirLight.castShadow = true;
        // // dirLight.shadow.radius = 1;

				// dirLight.shadow.mapSize.width = 4096/2;
				// dirLight.shadow.mapSize.height = 4096/2;

				const d = 50;

				dirLight.shadow.camera.left = - d;
				dirLight.shadow.camera.right = d;
				dirLight.shadow.camera.top = d;
				dirLight.shadow.camera.bottom = - d;

				dirLight.shadow.camera.far = 3500;
				dirLight.shadow.bias = - 0.0001;

				// // Add Sky
				// let sky = new Sky();
				// sky.scale.setScalar( 450000 );
				// let sun = new THREE.Vector3();

        // const effectController = {
				// 	turbidity: 5,
				// 	rayleigh: .5,
				// 	mieCoefficient: 0.005,
				// 	mieDirectionalG: 0.7,
				// 	elevation: 100,
				// 	azimuth: 180,
				// 	exposure: renderer.toneMappingExposure
				// };

        // const uniforms = sky.material.uniforms;
        // uniforms[ 'turbidity' ].value = effectController.turbidity;
        // uniforms[ 'rayleigh' ].value = effectController.rayleigh;
        // uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
        // uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;

        // const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
        // const theta = THREE.MathUtils.degToRad( effectController.azimuth );

        // sun.setFromSphericalCoords( 1, phi, theta );

        // uniforms[ 'sunPosition' ].value.copy( sun );

				// scene.add( sky );

const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 1, 1, 1 );
scene.add( light );

scenes.push(scene);
setScenes(scenes);

animate()
}

function animate() {
  frameIdRef.current = requestAnimationFrame(animate); // Save the frame ID to frameIdRef.current.
  // requestAnimationFrame( animate );
  renderer.toneMappingExposure = Math.pow( exposure, 5.0 ); // to allow for very bright scenes.
  renderer.setClearColor( 0xffffff );
  renderer.render( scene, camera );
  }
});

export default ModelStart;