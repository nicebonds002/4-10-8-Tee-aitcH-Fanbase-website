
import { NextResponse } from 'next/server';

// Mock data (แทนที่ด้วยฐานข้อมูลจริง)
const events = [
  {
    id: '1',
    name: 'Concert A',
    date: '2023-12-01',
    location: 'Bangkok Arena',
    price: 1500,
    description: 'คอนเสิร์ตสุดพิเศษของวงไอดอล',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpCrQfhrPBgHQScjH9BAhhHCdnhotCfI9OA&s', // ตัวอย่าง URL รูปภาพ
    available: true,
  },
  {
    id: '2',
    name: 'Concert B',
    date: '2023-12-15',
    location: 'Impact Arena',
    price: 2000,
    description: 'พบปะแฟนคลับในงานใหญ่',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFFtVToLPJ5rSvSp_zD4NObKTwzBdw6HIJA&s',
    available: true,
  },
];

export async function GET() {
  return NextResponse.json(events);
}