// import * as THREE from 'three';
// import { OrbitControls, Environment, ContactShadows, Stars } from '@react-three/drei'
// import {Model} from './Models/Model';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'gsap/all';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import { useState, Suspense, useEffect } from 'react';
import "./Three.css";
import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei"
import Scene from './Scene';

function ModelStart(props){
  const [snap, setSnap] = useState(false);
  
  useEffect(() => {
  const isReactSnap = navigator.userAgent.includes('ReactSnap');
  if (!isReactSnap) {
    setSnap(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (
  <> 
    { snap ? 
    <div className='model-canvas'>            
      {/* <Canvas className='render-item'> */}
      <Canvas 
       shadows={true}>
        <Suspense fallback={null}>
         <Scene url={props.url}/>
        </Suspense>
      </Canvas>
      <Loader />
    </div> 
    :
    <div>HeyMate</div>
    }
  </>
  )
};

export default ModelStart;
