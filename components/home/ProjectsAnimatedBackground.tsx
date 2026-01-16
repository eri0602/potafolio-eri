"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Box, Cone, Cylinder } from '@react-three/drei'
import { Mesh } from 'three'

function ProjectsAnimatedElements() {
  const boxRef = useRef<Mesh>(null)
  const coneRef = useRef<Mesh>(null)
  const cylinderRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4
      boxRef.current.rotation.y = t * 0.3
      boxRef.current.position.y = Math.sin(t * 0.5) * 0.4
    }

    if (coneRef.current) {
      coneRef.current.rotation.z = t * 0.6
      coneRef.current.position.x = Math.cos(t * 0.4) * 1.5
    }

    if (cylinderRef.current) {
      cylinderRef.current.rotation.x = t * 0.2
      cylinderRef.current.rotation.z = t * 0.5
      cylinderRef.current.position.z = Math.sin(t * 0.6) * 0.3
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.15
      textRef.current.position.y = Math.cos(t * 0.4) * 0.25
    }
  })

  return (
    <>
      <group ref={textRef} position={[-2.5, 0.8, -1]}>
        <Text
          fontSize={0.18}
          color="#f59e0b"
          anchorX="center"
          anchorY="middle"
        >
          {'🚀'}
        </Text>
      </group>

      <group position={[2, -0.3, -0.8]}>
        <Text
          fontSize={0.14}
          color="#ef4444"
          anchorX="center"
          anchorY="middle"
        >
          {'📋'}
        </Text>
      </group>

      <Box ref={boxRef} args={[0.2, 0.2, 0.2]} position={[1, 0.5, -0.6]}>
        <meshStandardMaterial color="#10b981" opacity={0.35} transparent />
      </Box>

      <Cone ref={coneRef} args={[0.15, 0.3]} position={[-1, -0.7, -0.7]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent />
      </Cone>

      <Cylinder ref={cylinderRef} args={[0.12, 0.12, 0.4]} position={[0, 1, -0.8]}>
        <meshStandardMaterial color="#ec4899" opacity={0.3} transparent />
      </Cylinder>

      <mesh position={[2.5, 1.2, -1.2]}>
        <dodecahedronGeometry args={[0.15]} />
        <meshStandardMaterial color="#60a5fa" opacity={0.25} transparent />
      </mesh>

      <mesh position={[-2, -1, -1]}>
        <octahedronGeometry args={[0.12]} />
        <meshStandardMaterial color="#f59e0b" opacity={0.3} transparent />
      </mesh>

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 3]} intensity={0.4} />
      <pointLight position={[-4, 2, 1]} intensity={0.3} color="#ef4444" />
    </>
  )
}

function ProjectsCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-35">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 65 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ProjectsAnimatedElements />
      </Canvas>
    </div>
  )
}

export function ProjectsAnimatedBackground() {
  return <ProjectsCanvas />
}
