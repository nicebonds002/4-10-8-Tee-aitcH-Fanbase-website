import Image from "next/image";
import HeroSlider from '@/components/hero/HeroSlider'
import { menuItems } from "@/components/navbar/menuItems";

export default function Home() {
  return (
    <>
    <HeroSlider />
    {menuItems.map((item) => (
      <div key={item.id} id={item.id} className="content">
        <h1>{item.label}</h1>
      </div>
    ))}
    </>
  );
}
