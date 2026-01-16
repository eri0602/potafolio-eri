"use client"

import { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Sphere, Box, Cone } from '@react-three/drei'
import { Mesh } from 'three'

interface HeroProgrammerBackgroundProps {
  onLoad?: () => void
}

function HeroCodeElements({ onLoad }: { onLoad?: () => void }) {
  const sphereRef = useRef<Mesh>(null)
  const boxRef = useRef<Mesh>(null)
  const coneRef = useRef<Mesh>(null)
  const textRef = useRef<Mesh>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoad?.()
    }, 500)
    return () => clearTimeout(timer)
  }, [onLoad])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.5
      sphereRef.current.rotation.y = t * 0.3
      sphereRef.current.position.y = Math.sin(t * 0.8) * 0.3
    }

    if (boxRef.current) {
      boxRef.current.rotation.z = t * 0.4
      boxRef.current.position.x = Math.cos(t * 0.6) * 1.5
    }

    if (coneRef.current) {
      coneRef.current.rotation.x = t * 0.6
      coneRef.current.rotation.z = t * 0.2
      coneRef.current.position.z = Math.sin(t * 0.7) * 0.4
    }

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.1
      textRef.current.position.y = Math.sin(t * 0.3) * 0.2
    }
  })

  return (
    <>
      <group ref={textRef} position={[-2, 1, -1]}>
        <Text
          fontSize={0.3}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          {'</>'}
        </Text>
      </group>

      <Sphere ref={sphereRef} args={[0.2, 16, 16]} position={[2, 0.5, -0.8]}>
        <meshStandardMaterial color="#10b981" opacity={0.4} transparent />
      </Sphere>

      <Box ref={boxRef} args={[0.15, 0.15, 0.15]} position={[1, -0.3, -0.6]}>
        <meshStandardMaterial color="#f59e0b" opacity={0.5} transparent />
      </Box>

      <Cone ref={coneRef} args={[0.1, 0.25]} position={[-1.5, -0.5, -0.7]}>
        <meshStandardMaterial color="#ec4899" opacity={0.4} transparent />
      </Cone>

      <mesh position={[0, -1, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial
          color="#1e293b"
          opacity={0.1}
          transparent
          wireframe
        />
      </mesh>

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 3]} intensity={0.3} />
      <pointLight position={[-5, 3, 2]} intensity={0.2} color="#60a5fa" />
    </>
  )
}

function HeroCanvas({ onLoad }: { onLoad?: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <HeroCodeElements onLoad={onLoad} />
      </Canvas>
    </div>
  )
}

export function HeroProgrammerBackground({ onLoad }: HeroProgrammerBackgroundProps) {
  return (
    <>
      <HeroCanvas onLoad={onLoad} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      </div>
    </>
  )
}
