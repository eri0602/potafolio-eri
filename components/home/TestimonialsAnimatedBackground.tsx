"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Mesh } from 'three'

function TestimonialsAnimatedElements() {
  const starRef = useRef<Mesh>(null)
  const heartRef = useRef<Mesh>(null)
  const awardRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (starRef.current) {
      starRef.current.rotation.z = t * 0.3
      starRef.current.position.y = Math.sin(t * 0.4) * 0.3
    }

    if (heartRef.current) {
      heartRef.current.rotation.y = t * 0.25
      heartRef.current.position.x = Math.cos(t * 0.5) * 1
    }

    if (awardRef.current) {
      awardRef.current.rotation.x = t * 0.2
      awardRef.current.position.z = Math.sin(t * 0.6) * 0.2
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.1
      textRef.current.position.y = Math.cos(t * 0.7) * 0.25
    }
  })

  return (
    <>
      <group ref={textRef} position={[2, 0.4, -0.9]}>
        <Text
          fontSize={0.16}
          color="#fbbf24"
          anchorX="center"
          anchorY="middle"
        >
          {'⭐'}
        </Text>
      </group>

      <group position={[-2.2, 0.8, -0.7]}>
        <Text
          fontSize={0.14}
          color="#ec4899"
          anchorX="center"
          anchorY="middle"
        >
          {'💝'}
        </Text>
      </group>

      <mesh ref={starRef} position={[1.2, -0.3, -0.8]}>
        <octahedronGeometry args={[0.15]} />
        <meshStandardMaterial color="#fbbf24" opacity={0.4} transparent />
      </mesh>

      <mesh ref={heartRef} position={[-1, 1, -0.6]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ec4899" opacity={0.35} transparent />
      </mesh>

      <mesh ref={awardRef} position={[0, -0.8, -0.9]}>
        <icosahedronGeometry args={[0.14]} />
        <meshStandardMaterial color="#10b981" opacity={0.4} transparent />
      </mesh>

      <group position={[-1.8, -1.2, -1]}>
        <Text
          fontSize={0.08}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          {'"Excelente"'}
        </Text>
      </group>

      <group position={[2.3, 1.4, -0.8]}>
        <Text
          fontSize={0.07}
          color="#8b5cf6"
          anchorX="center"
          anchorY="middle"
        >
          {'"Profesional"'}
        </Text>
      </group>

      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 2]} intensity={0.3} />
      <pointLight position={[-3, 2, 1]} intensity={0.2} color="#fbbf24" />
    </>
  )
}

function TestimonialsCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-25">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 66 }}
        gl={{ alpha: true, antialias: true }}
      >
        <TestimonialsAnimatedElements />
      </Canvas>
    </div>
  )
}

export function TestimonialsAnimatedBackground() {
  return <TestimonialsCanvas />
}
