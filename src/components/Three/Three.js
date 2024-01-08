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
let clase = props.class;

const loaderInsideCanvas = <Loader containerStyles={{ position: 'relative', top: '0', left: '0', width: '100%', height: '100%' }} />

return (
  <> 
    { snap ? 
    <div className={clase}>            
      {/* <Canvas className='render-item'> */}
      <Suspense fallback={loaderInsideCanvas}>
      <Canvas 
       shadows={true}>
         <Scene url={props.url}/>
      </Canvas>
      </Suspense>
      {/* <Loader />  */}
    </div> 
    :
    <div>            
      <img alt='m4llogo' src={require('../../img/logo-single.png')} className="logo"></img>
    </div>
    }
  </>
  )
};

export default ModelStart;
