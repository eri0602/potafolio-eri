"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Dodecahedron, Icosahedron, Octahedron } from '@react-three/drei'
import { Mesh } from 'three'

function SkillsAnimatedElements() {
  const dodecaRef = useRef<Mesh>(null)
  const icosaRef = useRef<Mesh>(null)
  const octaRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (dodecaRef.current) {
      dodecaRef.current.rotation.x = t * 0.25
      dodecaRef.current.rotation.y = t * 0.4
      dodecaRef.current.position.y = Math.sin(t * 0.3) * 0.6
    }

    if (icosaRef.current) {
      icosaRef.current.rotation.z = t * 0.5
      icosaRef.current.position.x = Math.cos(t * 0.7) * 1.3
    }

    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.35
      octaRef.current.rotation.z = t * 0.6
      octaRef.current.position.z = Math.sin(t * 0.4) * 0.4
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.12
      textRef.current.position.y = Math.cos(t * 0.5) * 0.3
    }
  })

  return (
    <>
      <group ref={textRef} position={[-2, 0.8, -1]}>
        <Text
          fontSize={0.16}
          color="#06b6d4"
          anchorX="center"
          anchorY="middle"
        >
          {'⚡'}
        </Text>
      </group>

      <group position={[2.2, -0.2, -0.8]}>
        <Text
          fontSize={0.14}
          color="#f59e0b"
          anchorX="center"
          anchorY="middle"
        >
          {'🎯'}
        </Text>
      </group>

      <Dodecahedron ref={dodecaRef} args={[0.18]} position={[1, 0.6, -0.7]}>
        <meshStandardMaterial color="#ec4899" opacity={0.35} transparent />
      </Dodecahedron>

      <Icosahedron ref={icosaRef} args={[0.15]} position={[-1.5, -0.4, -0.6]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent />
      </Icosahedron>

      <Octahedron ref={octaRef} args={[0.16]} position={[0, 1.3, -0.9]}>
        <meshStandardMaterial color="#10b981" opacity={0.3} transparent />
      </Octahedron>

      <mesh position={[-2.5, -1, -1.1]}>
        <tetrahedronGeometry args={[0.12]} />
        <meshStandardMaterial color="#60a5fa" opacity={0.4} transparent />
      </mesh>

      <mesh position={[2.5, 1.5, -1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" opacity={0.35} transparent />
      </mesh>

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 2]} intensity={0.3} />
      <pointLight position={[-3, 3, 1]} intensity={0.25} color="#06b6d4" />
    </>
  )
}

function SkillsCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 68 }}
        gl={{ alpha: true, antialias: true }}
      >
        <SkillsAnimatedElements />
      </Canvas>
    </div>
  )
}

export function SkillsAnimatedBackground() {
  return <SkillsCanvas />
}
