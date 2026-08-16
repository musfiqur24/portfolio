import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion"
import './styles.css'

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <GlobalStyle />
        <Header />
        <Main />
        <Analytics />
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
