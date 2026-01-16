"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus, Icosahedron } from '@react-three/drei'
import { Mesh } from 'three'

function AnimatedGeometry() {
  const sphereRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const icosaRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.5
      sphereRef.current.rotation.y = t * 0.3
      sphereRef.current.position.y = Math.sin(t) * 0.5
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2
      torusRef.current.rotation.z = t * 0.4
      torusRef.current.position.x = Math.cos(t * 0.5) * 2
    }

    if (icosaRef.current) {
      icosaRef.current.rotation.y = t * 0.6
      icosaRef.current.position.z = Math.sin(t * 0.7) * 1
    }
  })

  return (
    <>
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[-3, 1, -2]}>
        <meshStandardMaterial color="#3b82f6" opacity={0.3} transparent />
      </Sphere>

      <Torus ref={torusRef} args={[1, 0.4, 16, 32]} position={[3, -1, -3]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent />
      </Torus>

      <Icosahedron ref={icosaRef} args={[1]} position={[0, 2, -4]}>
        <meshStandardMaterial color="#10b981" opacity={0.25} transparent />
      </Icosahedron>

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
    </>
  )
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true }}
      >
        <AnimatedGeometry />
      </Canvas>
    </div>
  )
}