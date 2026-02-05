import { HeroSlideData } from '@/components/hero/hero'
import styles from './hero.module.css'

export default function HeroContent({ slide }: { slide: HeroSlideData }) {
  return (
    <div
      className={`${styles.content} ${
        slide.align === 'right' ? styles.right : styles.left
      }`}
    >
      <div className={styles.gradient}>
        <h1>{slide.heading}</h1>
        {slide.description && <p>{slide.description}</p>}
      </div>
    </div>
  )
}
