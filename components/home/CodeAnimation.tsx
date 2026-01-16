"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

const codeSnippets = [
  {
    language: "JavaScript",
    code: [
      "const portfolio = {",
      "  skills: ['React', 'Next.js', 'TypeScript'],",
      "  experience: 'Building amazing web experiences',",
      "  passion: 'Creating interactive UIs'",
      "};"
    ],
    colors: {
      keyword: "text-blue-400",
      string: "text-green-400",
      comment: "text-gray-500"
    }
  },
  {
    language: "CSS",
    code: [
      ".portfolio {",
      "  animation: fadeIn 2s ease-in-out;",
      "  transform: translateY(0);",
      "  opacity: 1;",
      "}"
    ],
    colors: {
      selector: "text-purple-400",
      property: "text-blue-400",
      value: "text-green-400"
    }
  },
  {
    language: "Terminal",
    code: [
      "$ npm run build",
      "✓ Compiled successfully in 12.5s",
      "$ npm run deploy",
      "🚀 Deployed to production"
    ],
    colors: {
      command: "text-green-400",
      success: "text-blue-400",
      output: "text-yellow-400"
    }
  }
]

export function CodeAnimation() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [isTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]

    if (currentLine < snippet.code.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, snippet.code[currentLine]])
        setCurrentLine(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentSnippet(prev => (prev + 1) % codeSnippets.length)
        setDisplayedLines([])
        setCurrentLine(0)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentSnippet])

  const getLineClass = (line: string) => {
    const snippet = codeSnippets[currentSnippet]

    if (snippet.language === "JavaScript") {
      if (line.includes("const") || line.includes("};")) return snippet.colors.keyword
      if (line.includes("'") || line.includes('"')) return snippet.colors.string
      if (line.includes("//")) return snippet.colors.comment
    }

    if (snippet.language === "CSS") {
      if (line.includes(".")) return snippet.colors.selector
      if (line.includes(":")) return snippet.colors.property
      if (line.includes(";")) return snippet.colors.value
    }

    if (snippet.language === "Terminal") {
      if (line.includes("$")) return snippet.colors.command
      if (line.includes("✓") || line.includes("🚀")) return snippet.colors.success
      return snippet.colors.output
    }

    return "text-foreground"
  }

  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 font-mono text-sm max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-muted-foreground">
          {codeSnippets[currentSnippet].language}
        </div>
      </div>

      <div className="space-y-1 min-h-[120px]">
        {displayedLines.map((line, index) => (
          <motion.div
            key={`${currentSnippet}-${index}`}
            className={`flex items-center space-x-2 ${getLineClass(line)}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-muted-foreground w-6 text-right">
              {String(index + 1).padStart(2, ' ')}
            </span>
            <span>{line}</span>
            {index === displayedLines.length - 1 && isTyping && (
              <motion.span
                className="w-2 h-4 bg-primary ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center mt-4 space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Terminal size={16} className="text-primary" />
        <span className="text-xs text-muted-foreground">Desarrollo Web en Acción</span>
      </motion.div>
    </motion.div>
  )
}