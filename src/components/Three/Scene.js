// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'gsap/all';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import {Floor} from './Models/Floor';
// import { useState } from 'react';
// import { useThree } from '@react-three/fiber'

import "./Three.css";
import { PresentationControls, PerspectiveCamera } from '@react-three/drei'
import {Model} from './Models/Model';

function Scene(props){
  // const [scenes, setScenes] = useState([]);
  // const {scene, camera } = useThree();
return (
  <>          
      {/* <Canvas className='render-item'> */}
        <ambientLight />
        {/* <Floor/> */}
        <PerspectiveCamera 
          makeDefault
          fov={30} near={1} far={15} 
          position={[0, 1, 5]}
          />
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 6}
        />
        {/* <Environment preset="city" /> */}
        {/* <pointLight position={[5, 0, 2]} /> */}
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          // global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          // snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          // zoom={1} // Zoom factor when half the polar-max is reached
          snap 
          global 
          zoom={2} 
          rotation={[Math.PI / 36, 0, 0]} 
          polar={[0, Math.PI / 4]} 
          azimuth={[-Math.PI / 10, Math.PI / 10]}
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
        <Model 
        url={props.url}
        position={[0, 0, 0]} />
        </PresentationControls>
        {/* <OrbitControls target={[0 , .8, 0]} /> */}
        {/* <ContactShadows           
        position={[1, 1, 1]}
        color="#ffffff" /> */}
  </>
  )
};

export default Scene;