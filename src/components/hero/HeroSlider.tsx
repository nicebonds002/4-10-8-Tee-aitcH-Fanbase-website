'use client'
import { useState, useEffect } from 'react'
import { heroSlides } from './heroData'
import HeroSlide from './HeroSlide'
import HeroContent from './HeroContent'
import styles from './hero.module.css'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = heroSlides[index]

  return (
    <section className={styles.hero}>
      {heroSlides.map((slide, i) => (
        <HeroSlide key={slide.id} slide={slide} active={i === index} />
      ))}
      <HeroContent slide={current} />
    </section>
  )
}
