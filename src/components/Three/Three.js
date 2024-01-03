// import * as THREE from 'three';
// import { OrbitControls, Environment, ContactShadows, Stars } from '@react-three/drei'
// import {Model} from './Models/Model';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'gsap/all';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useState, useEffect } from 'react';


import "./Three.css";
import { Canvas } from '@react-three/fiber'
import Scene from './Scene';

function ModelStart(props){
  const [snap, setSnap] = useState(false);
  const isReactSnap = navigator.userAgent.includes('ReactSnap');
  console.log(isReactSnap)

  useEffect(() => {
  if (!isReactSnap) {
    setSnap(true);
    }
  }, [isReactSnap]);

return (
  <> 
    { snap ? 
    <div className='model-canvas'>            
      {/* <Canvas className='render-item'> */}
      <Canvas 
       shadows={true}>
        <Scene url={props.url}/>
      </Canvas>
    </div> 
    :
    <div>HeyMate</div>
    }
  </>
  )
};

export default ModelStart;