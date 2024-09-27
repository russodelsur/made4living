// import { useState, useTransition } from 'react'
// import { useControls, LevaPanel, useCreateStore, useStoreContext } from 'leva'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls, Box, Loader } from '@react-three/drei'
import {Model} from './Models/Model';
import * as THREE from 'three';
import { Suspense, useState, useEffect } from 'react';

export default function City(props) {
    const loaderInsideCanvas = <Loader containerStyles={{ position: 'relative', top: '0', left: '0', width: '100%', 
                                                          height: '100%', margin:"none", flexWrap:"wrap", 
                                                          alignItems:"center", alignContent:"center"}} />
    const material = new THREE.MeshStandardMaterial( { color: 0xffffff}, {roughness: ".2"} );
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
            <Suspense fallback={loaderInsideCanvas}>
              <Canvas 
              style={{borderRadius: "10px", width: "100%", height: "100%"}}
              shadows={true} 
              camera={{ position: [0, 0, 6.5], fov: 40 }}>
              <group position={[0, -0.65, 0]}>
              <Box args={[1000, .1, 1000]} position={[0, -2, 0]} />
                  <Center center>
                    {/* <mesh castShadow>
                      <sphereGeometry args={[0.75, 64, 64]} />
                    </mesh> */}
                      <Model 
                      threshold={40}
                      material={material} 
                      url={props.url}
                      position={[0, 0, 0]} />
                  </Center>
                  <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={1000} alphaTest={0.85}>
                  <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
                  </AccumulativeShadows>
                  {/* <directionalLight
                  position={[3.3, 1.0, 4.4]}
                  castShadow={true}
                  intensity={Math.PI * 10}
                  />
                  <ContactShadows           
                  position={[1, 1, 1]}
                  color="#ffffff" />  */}
              </group>
              <Environment preset={props.preset} background blur={1} />
              <OrbitControls autoRotate autoRotateSpeed={.5} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
              </Canvas>
            </Suspense>
                :
                <div>            
                  <img alt='m4llogo' src={require('../../img/logo-single.png')} className="logo"></img>
                </div>
          }
      </>

  )
}


// function Env() {
//   const [preset, setPreset] = useState('sunset')
//   // You can use the "inTransition" boolean to react to the loading in-between state,
//   // For instance by showing a message
//   const [inTransition, startTransition] = useTransition()
//   const { blur } = useControls({
//     blur: { value: 0.65, min: 0, max: 1 },
//     preset: {
//       value: preset,
//       options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
//       // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
//       // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
//       // That way we can hang onto the current environment until the new one has finished loading ...
//       onChange: (value) => startTransition(() => setPreset(value))
//     }
//   })
//   return <Environment preset={preset} background blur={blur} />
// }
