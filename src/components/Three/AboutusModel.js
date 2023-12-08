import * as THREE from 'three';
import { forwardRef } from 'react';
import "./Three.css";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'gsap/all';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useState, useEffect} from 'react';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
// import Stats from 'animate/examples/jsm/libs/stats.module'


const LondonModel = forwardRef((props, ref) => {

let pixelRatio = window.devicePixelRatio
let AA = true
if (pixelRatio > 1) {
  AA = false
}

const [scenes, setScenes] = useState([]);
const [canvas] = useState(document.createElement('canvas'));
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

let model, scene, exposure;

useEffect(() => {
  const rect = ref.current.getBoundingClientRect()
  camera.aspect = rect.width/ rect.height;
  camera.updateProjectionMatrix();
  renderer.setSize(rect.width, rect.height);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 

useEffect(() => {

    const handleResize = () => {
      if (ref.current) {
        // Get the dimensions and position of the element
      setWindowWidth(window.innerWidth);
      const rect = ref.current.getBoundingClientRect()
      camera.aspect = rect.width/ rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [windowWidth]); // Empty dependency array, so the effect runs only once on mount

useEffect(() =>{
        canvas.className = 'london';
        renderCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

function renderThree() {
    return new Promise((resolve) => {
    resolve(init())
    });
  }
  async function renderCanvas() {
    await renderThree();
    ref.current.appendChild(canvas);
  }

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
  scene.fog = new THREE.Fog( scene.background, 1, 5000 );

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.toneMapping = THREE.ReinhardToneMapping;
  exposure = 1.2;
  renderer.toneMappingExposure = exposure;
  renderer.setPixelRatio( window.devicePixelRatio );

  camera.position.set(0, 1, 3);
  camera.rotation.set(Math.PI/-2, 0, 0)
  scene.userData.camera = camera;

  // renderer.setSize( rect.width, rect.height);

// Materials

// const material = new THREE.MeshLambertMaterial({
//   // roughness: .5,
//   // metalness: .2,
//   color: 0xffffff,
//   side: THREE.DoubleSide
//   // clearcoat: 1,
//   // clearcoatRoughness: .2,
// })	

// Loading models
let decoderPath = 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/';
const loadingManager = new THREE.LoadingManager();
const loader = new GLTFLoader(loadingManager);
const draco = new DRACOLoader();
// draco.setDecoderConfig({type: 'js'});
draco.setDecoderPath(decoderPath);
loader.setDRACOLoader( draco );

loader.load("./gltf/london.gltf", function (gltf) {
  // gltf.scene.traverse((o) => {
  //   if (o.isMesh) o.material = material;
  // });		
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  model = gltf.scene;
  scene.add(model);
  console.log(model)
  for (let i = 0; i < model.children.length; i++) {
    const mesh = model.children[i];
    console.log(mesh)
    // mesh.geometry.computeTangents(); // generates bad data due to degenerate UVs
    const edges = new THREE.EdgesGeometry( mesh.geometry );
    let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ));
    line.material.opacity = 0.25;
    line.material.transparent = true;
    scene.add( line );
  }
});


// function moveCamera (x, y, z) {
//   gsap.to(camera.position,    {
//     x,
//     y, 
//     z, 
//     duration: 2
// });}

// function rotateCamera (x, y, z){
// gsap.to(camera.rotation, {
//   x,
//   y,
//   z,
//   duration: 2
// });}
// let lightUp = "";
// let lightDown = "";
// let quantity = 2;
// document.getElementById("london").addEventListener("mouseover", function(){
//   moveCamera(0, 2, 4);
//   rotateCamera(Math.PI/-10, 0, 0);
//   lightUp = setInterval(lighting, 30)
//   function lighting(){
//   clearInterval(lightDown)
//   if (quantity === 50) {
//     clearInterval(lightUp)
//   } else {
//   dirLight.intensity = quantity+1;
//   quantity = dirLight.intensity;
//   }
//   }
// });

// document.getElementById("london").addEventListener("mouseout", function(){
//   moveCamera(0, 2, 5);
//   rotateCamera(Math.PI/-14, 0, 0);
//   clearInterval(lightUp);
//   lightDown = setInterval(lighting, 30)
//   function lighting(){
//   if (quantity === 2) {
//       clearInterval(lightDown)
//   } else {
//     dirLight.intensity = quantity-1;
//     quantity = dirLight.intensity; 
//   }
// }});

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 2;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2.1;
controls.target.set( 0, 0, 0 );
controls.enableZoom = false;
controls.enablePan = true;
controls.rotateSpeed = .2;
controls.enableDamping = false;
// controls.keys = {
// 	LEFT: 'ArrowLeft', //left arrow
// 	UP: 'ArrowUp', // up arrow
// 	RIGHT: 'ArrowRight', // right arrow
// 	BOTTOM: 'ArrowDown' // down arrow
// }

controls.update();

				// LIGHTS

				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 0, 50, 0 );
				scene.add( hemiLight );

				//

				const dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( .6, 1, 1 );
				dirLight.position.multiplyScalar( 30 );
				scene.add( dirLight );

				dirLight.castShadow = true;
        // dirLight.shadow.radius = 1;

				dirLight.shadow.mapSize.width = 4096;
				dirLight.shadow.mapSize.height = 4096;

				const d = 50;

				dirLight.shadow.camera.left = - d;
				dirLight.shadow.camera.right = d;
				dirLight.shadow.camera.top = d;
				dirLight.shadow.camera.bottom = - d;

				dirLight.shadow.camera.far = 3500;
				dirLight.shadow.bias = - 0.0001;


        // GROUND

				// const groundGeo = new THREE.PlaneGeometry( 10000, 10000 );
				// const groundMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
				// // groundMat.color.setHSL( 0.095, 1, 0.75 );

				// const ground = new THREE.Mesh( groundGeo, groundMat );
				// ground.position.y = -.04;
				// ground.rotation.x = - Math.PI / 2;
				// ground.receiveShadow = true;
				// scene.add( ground );


				// Add Sky
				let sky = new Sky();
				sky.scale.setScalar( 450000 );
				let sun = new THREE.Vector3();

        const effectController = {
					turbidity: 5,
					rayleigh: .5,
					mieCoefficient: 0.005,
					mieDirectionalG: 0.7,
					elevation: 100,
					azimuth: 180,
					exposure: renderer.toneMappingExposure
				};

        const uniforms = sky.material.uniforms;
        uniforms[ 'turbidity' ].value = effectController.turbidity;
        uniforms[ 'rayleigh' ].value = effectController.rayleigh;
        uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
        uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;

        const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
        const theta = THREE.MathUtils.degToRad( effectController.azimuth );

        sun.setFromSphericalCoords( 1, phi, theta );

        uniforms[ 'sunPosition' ].value.copy( sun );

				scene.add( sky );
				// let sun = new THREE.Vector3();


const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 1, 1, 1 );
scene.add( light );

scenes.push(scene);
setScenes(scenes);

animate()
}

function animate() {
  requestAnimationFrame( animate );
  renderer.toneMappingExposure = Math.pow( exposure, 5.0 ); // to allow for very bright scenes.
  renderer.setClearColor( 0xffffff );
  renderer.render( scene, camera );
}

});

export default LondonModel;