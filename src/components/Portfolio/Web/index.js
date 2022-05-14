import './index.scss'
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Sky } from "@react-three/drei"
import { Suspense } from 'react'
const Box = () => (
    <mesh position={[0,0,0]}>
    <boxBufferGeometry />
    <meshStandardMaterial attach="material" color="green" />
    </mesh>
    
)
const Plane = () => (
    <mesh position={[0,0,0]} rotation={[-Math.PI/ 2, 0, 0]}>
    <planeBufferGeometry attach="geometry" args={[2000,2000]} />
    <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
)


const Web = () => {
    return(
        <div className='portfolio-container'>
         <Canvas
         camera={{position : [75,20,0], fov: 80}}
       
         >
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Sky />
            <Box />
            <Plane />
            
        </Canvas>

        </div>
    )
}
export default Web