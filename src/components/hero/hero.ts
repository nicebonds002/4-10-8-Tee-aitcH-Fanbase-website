export type HeroSlideData = {
  id: number
  type: 'image' | 'video' | 'youtube'
  src: string // image path | video path | youtube url
  heading: string
  description?: string
  align?: 'left' | 'right'
}
