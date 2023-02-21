import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import React, { Suspense, useRef, useState, useEffect  } from 'react'
import { Canvas, useLoader,useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { EffectComposer , DepthOfField } from '@react-three/postprocessing'

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import GltfModel from './components/GltfModel'
import GltfNumber from './components/GltfNumber'



// Orbit-Controls
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};




export default function App({  modelPath, scale = 1, position = [0, 0, 0] , count = 15,  depth=60}) {
  
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30  }}>
    <color  attach="background" args={["#ddffff"]} />
    <Suspense fallback={null}>
    <ambientLight intensity={0.2} />
    <CameraController />
    <spotLight position={[10,10,10]}  intensity={2} />
    
    <GltfModel modelPath={modelPath} scale={scale} position={position} />
  
    <Environment preset="sunset" />
    {Array.from({ length: count}, (_,i) => (
    <GltfNumber key={i} z={-(i / count) * depth - 20}
     scale={[0.55,0.55,0.55]}
    />
    ))}
    <EffectComposer>
      <DepthOfField // target of focallength camera 60 ,depth = 60 /> hälfte
      // zwischjen kamera und 0 depth / 2
      //  target={[0,0,0]} focalLength={0.2} bokehScale={10} height={700} />
      
      target={[0,0,0]} focalLength={1.0} bokehScale={20} height={700} />
    </EffectComposer>
    </Suspense>
   
  </Canvas>
   
    )
}