'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scenes = [
  {
    id: 1,
    text: "एक दिन गर्मी बहुत ज़्यादा थी। रेलवे स्टेशन की पटरी के पास एक आम वाला अपनी टोकरी लेकर बैठा था।",
    character: "🥭",
    background: "linear-gradient(180deg, #FFD93D 0%, #FFA500 100%)",
    animation: "sitting"
  },
  {
    id: 2,
    text: "वहीं से एक पुलिस वाला ट्रेन में चढ़कर अपनी ड्यूटी पर जा रहा था।",
    character: "👮",
    background: "linear-gradient(180deg, #87CEEB 0%, #4682B4 100%)",
    animation: "waving"
  },
  {
    id: 3,
    text: "जैसे ही ट्रेन स्टेशन पर पहुँची, पुलिस वाला खिड़की से बाहर झाँक रहा था...",
    character: "🚂",
    background: "linear-gradient(180deg, #90EE90 0%, #228B22 100%)",
    animation: "moving"
  },
  {
    id: 4,
    text: "अचानक हवा के एक तेज़ झोंके से उसके हाथ में रखा लंच बॉक्स नीचे पटरी पर गिर गया।",
    character: "🍱",
    background: "linear-gradient(180deg, #FF6B6B 0%, #C92A2A 100%)",
    animation: "falling"
  },
  {
    id: 5,
    text: 'पुलिस वाला घबरा गया— "अरे! मेरा खाना तो गया!"',
    character: "😰",
    background: "linear-gradient(180deg, #FFE66D 0%, #FF6B6B 100%)",
    animation: "shocked"
  },
  {
    id: 6,
    text: 'आम वाला हँसते हुए बोला, "साहब, खाना गया—कोई बात नहीं! मैं आपको सबसे मीठा आम देता हूँ।"',
    character: "🥭😊",
    background: "linear-gradient(180deg, #98FB98 0%, #3CB371 100%)",
    animation: "happy"
  },
  {
    id: 7,
    text: 'पुलिस वाले ने मुस्कुराकर कहा, "तुमने तो मेरी समस्या ही हल कर दी!"',
    character: "👮😊",
    background: "linear-gradient(180deg, #FFB6D9 0%, #FF69B4 100%)",
    animation: "grateful"
  },
  {
    id: 8,
    text: 'आम वाला बोला, "समस्या हो या गर्मी—आम वाला हमेशा तैयार!"',
    character: "🥭💪",
    background: "linear-gradient(180deg, #FFDAB9 0%, #FFA07A 100%)",
    animation: "proud"
  },
  {
    id: 9,
    text: 'ट्रेन फिर सीटी मारकर चल दी। पुलिस वाला खिड़की से हाथ हिलाते हुए बोला— "अगली बार फिर मिलेंगे, आम के राजा!"',
    character: "🚂👋",
    background: "linear-gradient(180deg, #DDA0DD 0%, #9370DB 100%)",
    animation: "leaving"
  },
  {
    id: 10,
    text: 'और आम वाला खुशी से चिल्लाया— "ज़रूर साहब, आपका स्टेशन पर स्वागत रहेगा!"',
    character: "🥭🎉",
    background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
    animation: "celebrating"
  }
]

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
    } else {
      setCurrentScene(0)
    }
  }

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentScene((prev) => {
          if (prev >= scenes.length - 1) {
            clearInterval(interval)
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 4000)
    }
  }

  const scene = scenes[currentScene]

  const getAnimationVariant = (animation: string) => {
    switch (animation) {
      case 'sitting':
        return {
          y: [0, -10, 0],
          transition: { repeat: Infinity, duration: 2 }
        }
      case 'waving':
        return {
          rotate: [0, 20, -20, 0],
          transition: { repeat: Infinity, duration: 1.5 }
        }
      case 'moving':
        return {
          x: [-100, 100],
          transition: { repeat: Infinity, duration: 3, ease: "linear" }
        }
      case 'falling':
        return {
          y: [-50, 50],
          rotate: [0, 360],
          transition: { repeat: Infinity, duration: 2 }
        }
      case 'shocked':
        return {
          scale: [1, 1.2, 1],
          transition: { repeat: Infinity, duration: 0.5 }
        }
      case 'happy':
        return {
          scale: [1, 1.1, 1],
          rotate: [-5, 5, -5],
          transition: { repeat: Infinity, duration: 1.5 }
        }
      case 'grateful':
        return {
          y: [0, -15, 0],
          transition: { repeat: Infinity, duration: 2 }
        }
      case 'proud':
        return {
          scale: [1, 1.15, 1],
          transition: { repeat: Infinity, duration: 1.5 }
        }
      case 'leaving':
        return {
          x: [0, 150],
          transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }
      case 'celebrating':
        return {
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0],
          transition: { repeat: Infinity, duration: 1 }
        }
      default:
        return {}
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          marginBottom: '30px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '10px' }}>
          आम वाला और पुलिस वाला
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
          AI Cartoon Story
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{
            background: scene.background,
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '800px',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={getAnimationVariant(scene.animation)}
            style={{
              fontSize: '8rem',
              marginBottom: '30px'
            }}
          >
            {scene.character}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.5rem',
              lineHeight: '2rem',
              textAlign: 'center',
              color: 'rgba(0,0,0,0.8)',
              fontWeight: '600',
              backgroundColor: 'rgba(255,255,255,0.9)',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            {scene.text}
          </motion.p>

          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            color: 'rgba(0,0,0,0.4)',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            {currentScene + 1} / {scenes.length}
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '15px',
          marginTop: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={prevScene}
          disabled={currentScene === 0}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: 'none',
            background: currentScene === 0 ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            cursor: currentScene === 0 ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s',
            opacity: currentScene === 0 ? 0.5 : 1
          }}
        >
          ⬅️ पीछे
        </button>

        <button
          onClick={togglePlay}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s'
          }}
        >
          {isPlaying ? '⏸️ रुकें' : '▶️ चलाएं'}
        </button>

        <button
          onClick={nextScene}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s'
          }}
        >
          आगे ➡️
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: '40px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '800px'
        }}
      >
        {scenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScene(index)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              background: currentScene === index ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' : 'rgba(255,255,255,0.5)',
              color: currentScene === index ? 'white' : 'rgba(0,0,0,0.6)',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.3s'
            }}
          >
            {index + 1}
          </button>
        ))}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: '40px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '0.9rem'
        }}
      >
        <p>🤖 AI-Powered Interactive Cartoon</p>
        <p style={{ marginTop: '5px' }}>Created with Next.js & Framer Motion</p>
      </motion.footer>
    </main>
  )
}
