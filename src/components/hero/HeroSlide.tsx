import { HeroSlideData } from '@/components/hero/hero'
import { getYoutubeEmbedUrl } from './youtube'
import Image from 'next/image'
import styles from './hero.module.css'

type Props = {
  slide: HeroSlideData
  active: boolean
}

export default function HeroSlide({ slide, active }: Props) {
  return (
    <div className={`${styles.slide} ${active ? styles.active : ''}`}>
      {slide.type === 'image' && (
        <Image
          src={slide.src} // path จาก public folder
          alt={slide.heading}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      )}

      {slide.type === 'video' && (
        <video src={slide.src} autoPlay muted loop playsInline />
      )}

      {slide.type === 'youtube' && (() => {
        const embedUrl = getYoutubeEmbedUrl(slide.src)
        if (!embedUrl) return null
        return (
          <iframe
      src={embedUrl}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title={slide.heading}
          />
        )
      })()}
    </div>
  )
}
