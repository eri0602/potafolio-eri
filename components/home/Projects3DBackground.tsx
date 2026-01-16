"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cone, Cylinder, Tetrahedron } from '@react-three/drei'
import { Mesh } from 'three'

function ProjectsGeometry() {
  const coneRef = useRef<Mesh>(null)
  const cylinderRef = useRef<Mesh>(null)
  const tetraRef = useRef<Mesh>(null)
  const coneRef2 = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (coneRef.current) {
      coneRef.current.rotation.x = t * 0.4
      coneRef.current.rotation.y = t * 0.6
      coneRef.current.position.y = Math.sin(t * 0.8) * 0.5
    }

    if (cylinderRef.current) {
      cylinderRef.current.rotation.z = t * 0.3
      cylinderRef.current.position.x = Math.cos(t * 0.4) * 1.8
    }

    if (tetraRef.current) {
      tetraRef.current.rotation.x = t * 0.5
      tetraRef.current.rotation.z = t * 0.2
      tetraRef.current.position.z = Math.sin(t * 0.6) * 0.4
    }

    if (coneRef2.current) {
      coneRef2.current.rotation.y = t * 0.7
      coneRef2.current.position.y = Math.cos(t * 0.5) * 0.7
    }
  })

  return (
    <>
      <Cone ref={coneRef} args={[0.5, 1.2]} position={[-2.5, 0.8, -1]}>
        <meshStandardMaterial color="#f59e0b" opacity={0.12} transparent />
      </Cone>

      <Cylinder ref={cylinderRef} args={[0.3, 0.3, 1.5]} position={[2, -0.3, -0.8]}>
        <meshStandardMaterial color="#ef4444" opacity={0.15} transparent />
      </Cylinder>

      <Tetrahedron ref={tetraRef} args={[0.6]} position={[0, 1.2, -0.6]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.18} transparent />
      </Tetrahedron>

      <Cone ref={coneRef2} args={[0.4, 0.8]} position={[1.5, -1, -0.9]}>
        <meshStandardMaterial color="#10b981" opacity={0.14} transparent />
      </Cone>

      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 5, 3]} intensity={0.3} />
    </>
  )
}

export function Projects3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 65 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ProjectsGeometry />
      </Canvas>
    </div>
  )
}