import React, { useRef, useState  }   from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useLoader,useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export default function GltfModel ({ modelPath, scale = 40, position = [0, 0, 0] }) {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);
  
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    return (
      <>
        <primitive
          ref={ref}
          object={gltf.scene}
          position={position}
          scale={hovered ? scale * 1.15 : scale}
          
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
  
        />
      </>
      );
    };
   

function Model({...props}) { 
    // This reference will give us direct access to the mesh 
    const group = useRef() 
    // Rotate mesh every frame, this is outside of React without overhead 
    // useFrame(() => { 
   //   ref.current.rotation.y += 0.01 
   //   ref.current.position.z = 0
    // })
  
    //const { nodes, materials } = useGLTF("/cake-export5.glb");
   // const { nodes, materials } = useGLTF("/cake-export5.glb");
   const { nodes, materials } = useGLTF("/gift5.glb");
      return (
        <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Plane012.geometry} 
        // material ={nodes.Plane012.material}
      material={materials.Material004}  
           material-color="blue"
        material-emissive="cyan"
        scale={[0.05,0.24,0.05]} position={[0, 0, 0]}
        rotation={[0,0,0]}
        
        />
        
    </group> 
    ) 
  } 