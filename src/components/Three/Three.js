import * as THREE from 'three';
import "./Three.css";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap/all';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useState, useEffect, useRef} from 'react';

function ModelStart(props){
  const [scenes, setScenes] = useState([]);
  const isReactSnap = navigator.userAgent.includes('ReactSnap');
  let model, scene, dirLight;

  const frameIdRef = useRef(null);
  const canvasRef = useRef(null);
  const divRef = useRef(null);
  const isFirstRender = useRef(true);
  const renderer = useRef();
  const camera = useRef();

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
  if (typeof window !== 'undefined') {
  // if (typeof window !== 'undefined')  return;
  // if (!canvasRef.current) return;
  let pixelRatio = window.devicePixelRatio
  let AA = true
  if (pixelRatio > 1) {
    AA = false
  }
  camera.current = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, .01, 15 );
  renderer.current = new THREE.WebGLRenderer({ 
    canvas: canvasRef.current,
    alpha: false, 
    antialias: AA,
    powerPreference: "high-performance",
    precision: "highp",
  });
  const rect = divRef.current.getBoundingClientRect()
  camera.current.aspect = rect.width/ rect.height;
  camera.current.updateProjectionMatrix();
  renderer.current.setSize(rect.width, rect.height);
  if (!isReactSnap) {
  init(props.name);
  }
  function moveCamera (x, y, z) {
    gsap.to(camera.current.position,    {
      x,
      y, 
      z, 
      duration: 2
  });}
  
  function rotateCamera (x, y, z){
  gsap.to(camera.current.rotation, {
    x,
    y,
    z,
    duration: 2
  });}
  let lightUp = "";
  let lightDown = "";
  let quantity = 2;
  
  divRef.current.addEventListener("mouseover", function(){
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
  divRef.current.addEventListener("mouseout", function(){
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
    }
  });

  const handleResize = () => {
    if (divRef.current) {  
      const rect = divRef.current.getBoundingClientRect();
      camera.current.aspect = rect.width / rect.height;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(rect.width, rect.height);
    }
  };
  const currentRef = divRef.current;

  const resizeObserver = new ResizeObserver(handleResize);
  if (currentRef) {
    resizeObserver.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      resizeObserver.unobserve(currentRef);
    }
  };
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.click]); // Run once on mount

function init(name) {
  scene = new THREE.Scene();
  scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
  scene.fog = new THREE.Fog( scene.background, 1, 5000 );

  renderer.current.shadowMap.enabled = true;
  renderer.current.setPixelRatio( window.devicePixelRatio );

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
  scene.add(gltf.scene);
});

loader.load(name, function (gltf) {
  model = gltf.scene;
  model.traverse((o) => {
    if (o.isMesh) o.material = material;
  });
  scene.add(model);
  for (let i = 0; i < model.children.length; i++) {
    const mesh = model.children[i];
    const edges = new THREE.EdgesGeometry( mesh.geometry );
    let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ));
    line.material.opacity = 0.25;
    line.material.transparent = true;
    scene.add( line );
  }
});

camera.current.position.set(0,2,5);
camera.current.rotation.set(Math.PI/-14, 0, 0)
scene.userData.camera = camera.current;

// LIGHTS

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 2 );
hemiLight.color.setRGB( 1, 1, 1 );
hemiLight.groundColor.setRGB( 1, 1, 1 );
hemiLight.position.set( 0, 50, 0 );
scene.add( hemiLight );

dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
dirLight.color.setHSL( 0.1, 1, 0.95 );
dirLight.position.set( .6, 1, 1 );
dirLight.position.multiplyScalar( 30 );
scene.add( dirLight );

const d = 50;

dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;

dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.0001;

const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 1, 1, 1 );
scene.add( light );

scenes.push(scene);
setScenes(scenes);
animate()
}

function animate() {
  // renderer.current.setClearColor( 0xffffff );
  frameIdRef.current = requestAnimationFrame(animate); // Save the frame ID to frameIdRef.current.
  render();
}

function render(){
  renderer.current.render( scene, camera.current );
}

return (
  <>
    <div ref={divRef} className='model-canvas'>            
      <canvas ref={canvasRef} className='render-item'/>
    </div>
  </>
  )
};

export default ModelStart;