"use client"

import { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Sphere, Ring, Torus } from '@react-three/drei'
import { Mesh } from 'three'

function AboutAnimatedElements() {
  const sphereRef = useRef<Mesh>(null)
  const ringRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.3
      sphereRef.current.rotation.y = t * 0.5
      sphereRef.current.position.y = Math.sin(t * 0.4) * 0.5
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2
      ringRef.current.position.x = Math.cos(t * 0.6) * 1.2
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4
      torusRef.current.rotation.z = t * 0.3
      torusRef.current.position.z = Math.sin(t * 0.5) * 0.3
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.1
      textRef.current.position.y = Math.cos(t * 0.3) * 0.2
    }
  })

  return (
    <>
      <group ref={textRef} position={[2, 0.5, -1]}>
        <Text
          fontSize={0.2}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          {'{ }'}
        </Text>
      </group>

      <group position={[-2, 1, -0.8]}>
        <Text
          fontSize={0.15}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          {'</>'}
        </Text>
      </group>

      <Sphere ref={sphereRef} args={[0.25, 16, 16]} position={[1, -0.5, -0.6]}>
        <meshStandardMaterial color="#f59e0b" opacity={0.3} transparent />
      </Sphere>

      <Ring ref={ringRef} args={[0.4, 0.6, 32]} position={[-1, 0.8, -0.7]}>
        <meshStandardMaterial color="#ec4899" opacity={0.25} transparent />
      </Ring>

      <Torus ref={torusRef} args={[0.3, 0.1, 16, 32]} position={[0, -0.8, -0.9]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent />
      </Torus>

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={0.3} />
      <pointLight position={[-3, 2, 1]} intensity={0.2} color="#10b981" />
    </>
  )
}

function AboutCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 70 }}
        gl={{ alpha: true, antialias: true }}
      >
        <AboutAnimatedElements />
      </Canvas>
    </div>
  )
}

export function AboutAnimatedBackground() {
  return <AboutCanvas />
}
