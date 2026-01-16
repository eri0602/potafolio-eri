"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Dodecahedron, Icosahedron, Octahedron } from '@react-three/drei'
import { Mesh } from 'three'

function SkillsGeometry() {
  const dodecaRef = useRef<Mesh>(null)
  const icosaRef = useRef<Mesh>(null)
  const octaRef = useRef<Mesh>(null)
  const dodecaRef2 = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (dodecaRef.current) {
      dodecaRef.current.rotation.x = t * 0.2
      dodecaRef.current.rotation.y = t * 0.4
      dodecaRef.current.position.y = Math.sin(t * 0.3) * 0.6
    }

    if (icosaRef.current) {
      icosaRef.current.rotation.z = t * 0.5
      icosaRef.current.position.x = Math.cos(t * 0.7) * 1.2
    }

    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.3
      octaRef.current.rotation.z = t * 0.6
      octaRef.current.position.z = Math.sin(t * 0.4) * 0.5
    }

    if (dodecaRef2.current) {
      dodecaRef2.current.rotation.y = t * 0.8
      dodecaRef2.current.position.y = Math.cos(t * 0.6) * 0.8
    }
  })

  return (
    <>
      <Dodecahedron ref={dodecaRef} args={[0.5]} position={[-2, 0.5, -1]}>
        <meshStandardMaterial color="#06b6d4" opacity={0.16} transparent />
      </Dodecahedron>

      <Icosahedron ref={icosaRef} args={[0.4]} position={[2.2, -0.2, -0.7]}>
        <meshStandardMaterial color="#f59e0b" opacity={0.14} transparent />
      </Icosahedron>

      <Octahedron ref={octaRef} args={[0.45]} position={[0, 1.3, -0.8]}>
        <meshStandardMaterial color="#ec4899" opacity={0.18} transparent />
      </Octahedron>

      <Dodecahedron ref={dodecaRef2} args={[0.35]} position={[-1.5, -0.8, -0.9]}>
        <meshStandardMaterial color="#84cc16" opacity={0.15} transparent />
      </Dodecahedron>

      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 4, 2]} intensity={0.25} />
    </>
  )
}

export function Skills3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-35">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 62 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SkillsGeometry />
      </Canvas>
    </div>
  )
}