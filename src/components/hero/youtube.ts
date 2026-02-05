export function getYoutubeEmbedUrl(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  const match = url.match(regExp)
  if (!match) return ''
  const videoId = match[1]
  
  // playlist=videoId + loop=1 เพื่อให้ loop
  // controls=0 ซ่อนปุ่ม
  // modestbranding=1 ลดโลโก้
  // autoplay=1 mute=1 ให้ autoplay ได้
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&playlist=${videoId}`
}
