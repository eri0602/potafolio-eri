"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Octahedron } from '@react-three/drei'
import { Mesh } from 'three'

function AboutGeometry() {
  const sphereRef = useRef<Mesh>(null)
  const boxRef = useRef<Mesh>(null)
  const octaRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.3
      sphereRef.current.rotation.y = t * 0.2
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.8
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4
      boxRef.current.rotation.z = t * 0.3
      boxRef.current.position.x = Math.cos(t * 0.3) * 1.5
    }

    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.5
      octaRef.current.position.z = Math.sin(t * 0.4) * 0.6
    }
  })

  return (
    <>
      <Sphere ref={sphereRef} args={[0.8, 16, 16]} position={[-2, 0.5, -1]}>
        <meshStandardMaterial color="#60a5fa" opacity={0.15} transparent />
      </Sphere>

      <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[2, -0.5, -0.5]}>
        <meshStandardMaterial color="#a78bfa" opacity={0.2} transparent />
      </Box>

      <Octahedron ref={octaRef} args={[0.4]} position={[0, 1, -0.8]}>
        <meshStandardMaterial color="#34d399" opacity={0.18} transparent />
      </Octahedron>

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 2]} intensity={0.2} />
    </>
  )
}

export function About3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <AboutGeometry />
      </Canvas>
    </div>
  )
}