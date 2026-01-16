"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Ring, Torus, Sphere } from '@react-three/drei'
import { Mesh } from 'three'

function ContactGeometry() {
  const ringRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const sphereRef = useRef<Mesh>(null)
  const ringRef2 = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1
      ringRef.current.position.y = Math.sin(t * 0.2) * 0.3
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15
      torusRef.current.rotation.y = t * 0.25
      torusRef.current.position.x = Math.cos(t * 0.3) * 1
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.08
      sphereRef.current.position.z = Math.sin(t * 0.4) * 0.2
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = t * 0.12
      ringRef2.current.rotation.z = t * 0.18
      ringRef2.current.position.y = Math.cos(t * 0.5) * 0.4
    }
  })

  return (
    <>
      <Ring ref={ringRef} args={[0.8, 1.2, 32]} position={[-1.5, 0.2, -0.5]}>
        <meshStandardMaterial color="#e879f9" opacity={0.08} transparent />
      </Ring>

      <Torus ref={torusRef} args={[0.6, 0.15, 16, 32]} position={[1.8, -0.1, -0.3]}>
        <meshStandardMaterial color="#60a5fa" opacity={0.12} transparent />
      </Torus>

      <Sphere ref={sphereRef} args={[0.3, 16, 16]} position={[0, 0.8, -0.4]}>
        <meshStandardMaterial color="#34d399" opacity={0.1} transparent />
      </Sphere>

      <Ring ref={ringRef2} args={[0.5, 0.8, 24]} position={[-0.8, -0.5, -0.6]}>
        <meshStandardMaterial color="#fbbf24" opacity={0.09} transparent />
      </Ring>

      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 3, 1]} intensity={0.15} />
    </>
  )
}

export function Contact3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-25">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ContactGeometry />
      </Canvas>
    </div>
  )
}