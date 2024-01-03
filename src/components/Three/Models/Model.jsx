import * as THREE from 'three';
import React from 'react'
import { useGLTF, Edges } from '@react-three/drei'

let url;

export function Model(props) {
  url = props.url;
  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  })	

  const { nodes } = useGLTF(props.url)
  let aNodes = Object.values(nodes);
  
  return (
    <group>
      {aNodes.map((node, index) => (
      <mesh key={index} geometry={node.geometry} material={material}>
      <Edges scale={1} threshold={4} color={0x4D4D4D}/>
      </mesh>
      ))}
    </group>
  )
}

useGLTF.preload(url)

