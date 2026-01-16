"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Play, CheckCircle, AlertCircle, Zap, Upload, Globe } from "lucide-react"

type IconComponent = typeof AlertCircle

interface BuildStep {
  id: string
  title: string
  description: string
  icon: IconComponent
  duration: number
  status: 'pending' | 'running' | 'completed' | 'error'
}

const buildSteps: BuildStep[] = [
  {
    id: 'lint',
    title: 'Linting Code',
    description: 'Checking code quality and style',
    icon: AlertCircle,
    duration: 2000,
    status: 'pending'
  },
  {
    id: 'typecheck',
    title: 'Type Checking',
    description: 'Validating TypeScript types',
    icon: CheckCircle,
    duration: 1500,
    status: 'pending'
  },
  {
    id: 'build',
    title: 'Building Application',
    description: 'Compiling and bundling code',
    icon: Zap,
    duration: 3000,
    status: 'pending'
  },
  {
    id: 'test',
    title: 'Running Tests',
    description: 'Executing test suite',
    icon: Play,
    duration: 2500,
    status: 'pending'
  },
  {
    id: 'deploy',
    title: 'Deploying to Production',
    description: 'Publishing to live environment',
    icon: Upload,
    duration: 2000,
    status: 'pending'
  },
  {
    id: 'live',
    title: 'Live & Running',
    description: 'Application deployed successfully',
    icon: Globe,
    duration: 1000,
    status: 'pending'
  }
]

export function BuildAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startBuild = () => {
    setIsRunning(true)
    setCurrentStep(0)
  }

  useEffect(() => {
    if (!isRunning) {
      return
    }

    if (currentStep >= buildSteps.length) {
      const restartTimer = setTimeout(() => {
        setCurrentStep(0)
      }, 5000)
      restartTimeoutRef.current = restartTimer
      return
    }

    const step = buildSteps[currentStep]
    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, step.duration)
    timeoutRef.current = timer

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current)
      }
    }
  }, [currentStep, isRunning])

  const steps = buildSteps.map((step, index) => {
    if (!isRunning) return { ...step, status: 'pending' as const }
    if (index < currentStep) return { ...step, status: 'completed' as const }
    if (index === currentStep) return { ...step, status: 'running' as const }
    return { ...step, status: 'pending' as const }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-400'
      case 'completed': return 'text-green-400'
      case 'error': return 'text-red-400'
      default: return 'text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return 'animate-spin'
      case 'completed': return ''
      case 'error': return ''
      default: return ''
    }
  }

  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full"
            animate={isRunning ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: isRunning ? Infinity : 0 }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500 rounded-full"
            animate={isRunning ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: isRunning ? Infinity : 0, delay: 0.2 }}
          />
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={isRunning ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: isRunning ? Infinity : 0, delay: 0.4 }}
          />
        </div>
        <span className="text-sm font-mono text-muted-foreground">
          build-process
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <AnimatePresence mode="popLayout">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex items-start space-x-3 p-3 rounded-md bg-muted/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <motion.div
                className={`p-1 rounded ${getStatusColor(step.status)}`}
                animate={step.status === 'running' ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: step.status === 'running' ? Infinity : 0, ease: "linear" }}
              >
                <step.icon size={16} className={getStatusIcon(step.status)} />
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{step.title}</h4>
                  <motion.div
                    className={`w-2 h-2 rounded-full ${getStatusColor(step.status)}`}
                    animate={step.status === 'running' ? {
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    } : {}}
                    transition={{ duration: 0.8, repeat: step.status === 'running' ? Infinity : 0 }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{step.description}</p>

                {step.status === 'running' && (
                  <motion.div
                    className="mt-2 h-1 bg-muted rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: step.duration / 1000, ease: "easeInOut" }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        onClick={startBuild}
        disabled={isRunning}
        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!isRunning ? { scale: 1.02 } : {}}
        whileTap={!isRunning ? { scale: 0.98 } : {}}
      >
        <Play size={16} />
        <span>{isRunning ? 'Building...' : 'Start Build'}</span>
      </motion.button>

      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-muted-foreground">
          Proceso típico de desarrollo web moderno
        </p>
      </motion.div>
    </motion.div>
  )
}
