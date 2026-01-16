"use client"

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Ring, Torus, Sphere } from '@react-three/drei'
import { Mesh } from 'three'

function ContactAnimatedElements() {
  const ringRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const sphereRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15
      ringRef.current.position.y = Math.sin(t * 0.25) * 0.4
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2
      torusRef.current.rotation.y = t * 0.3
      torusRef.current.position.x = Math.cos(t * 0.35) * 1.1
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.1
      sphereRef.current.position.z = Math.sin(t * 0.45) * 0.25
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.08
      textRef.current.position.y = Math.cos(t * 0.6) * 0.2
    }
  })

  return (
    <>
      <group ref={textRef} position={[-1.8, 0.3, -0.8]}>
        <Text
          fontSize={0.17}
          color="#e879f9"
          anchorX="center"
          anchorY="middle"
        >
          {'💬'}
        </Text>
      </group>

      <group position={[1.6, -0.1, -0.6]}>
        <Text
          fontSize={0.15}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          {'📧'}
        </Text>
      </group>

      <Ring ref={ringRef} args={[0.3, 0.5, 32]} position={[1, 0.8, -0.7]}>
        <meshStandardMaterial color="#34d399" opacity={0.3} transparent />
      </Ring>

      <Torus ref={torusRef} args={[0.25, 0.08, 16, 32]} position={[-0.5, -0.6, -0.8]}>
        <meshStandardMaterial color="#f59e0b" opacity={0.35} transparent />
      </Torus>

      <Sphere ref={sphereRef} args={[0.18, 16, 16]} position={[0.8, 1, -0.9]}>
        <meshStandardMaterial color="#8b5cf6" opacity={0.4} transparent />
      </Sphere>

      <mesh position={[2.2, 1.3, -1]}>
        <torusGeometry args={[0.12, 0.04, 8, 16]} />
        <meshStandardMaterial color="#ec4899" opacity={0.3} transparent />
      </mesh>

      <mesh position={[-2, -1.2, -1.1]}>
        <ringGeometry args={[0.15, 0.2, 16]} />
        <meshStandardMaterial color="#06b6d4" opacity={0.35} transparent />
      </mesh>

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 1]} intensity={0.25} />
      <pointLight position={[-2, 2, 1]} intensity={0.2} color="#e879f9" />
    </>
  )
}

function ContactCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 72 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ContactAnimatedElements />
      </Canvas>
    </div>
  )
}

export function ContactAnimatedBackground() {
  return <ContactCanvas />
}
