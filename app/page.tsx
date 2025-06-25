"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Sparkles } from "lucide-react"

export default function DentalLanding() {
  const [showTexts, setShowTexts] = useState(true)

  // Função para criar confetes continuamente
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1", "#98FB98", "#DDA0DD"],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1", "#98FB98", "#DDA0DD"],
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  // Animação de fade in/out dos textos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTexts((prev) => !prev)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/3IEIQDG2JZ6UB1")
  }

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start pt-[150px] px-4 relative overflow-hidden">
      {/* Conteúdo principal */}
      <div className="max-w-md w-full text-center space-y-8 z-10">
        {/* Título com animação */}
        <AnimatePresence mode="wait">
          {showTexts && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">🎉 PARABÉNS 🎉</h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Texto explicativo */}
        <AnimatePresence mode="wait">
          {showTexts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                Você ganhou condições especiais no tratamento de clareamento.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ícone do dente com brilho */}
        <AnimatePresence mode="wait">
          {showTexts && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center my-8"
            >
              <div className="relative">
                <div className="text-8xl md:text-9xl">
                  <img
                  src="/dente.png"
                  alt="Dente"
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
                  }}
                  className="absolute -bottom-1 -left-2"
                >
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Texto de instrução */}
        <AnimatePresence mode="wait">
          {showTexts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2">
                Basta tirar um print dessa página e apresentar na recepção ou clicar aqui embaixo e entrar em contato
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botão do WhatsApp fixo na parte inferior */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="fixed bottom-20 left-4 right-4 z-20" // alterado de bottom-6 para bottom-20
      >
        <motion.button
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl text-lg md:text-xl shadow-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>ENTRE EM CONTATO!</span>
        </motion.button>
      </motion.div>

      {/* Overlay para garantir que o conteúdo seja visível sobre os confetes */}
      <div className="absolute inset-0 bg-white bg-opacity-10 pointer-events-none" />
    </div>
  )
}
