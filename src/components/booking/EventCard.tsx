// src/components/EventCard.tsx
import Link from 'next/link';
import Image from 'next/image'; // ใช้สำหรับ optimize รูปภาพ

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
  available: boolean;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      {/* รูปภาพ */}
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{event.name}</h2>
      <p className="text-gray-600">{event.description}</p>
      <p><strong>วันที่:</strong> {event.date}</p>
      <p><strong>สถานที่:</strong> {event.location}</p>
      <p><strong>ราคาเริ่มต้น:</strong> {event.price} บาท</p>
      <p className={`font-bold ${event.available ? 'text-green-500' : 'text-red-500'}`}>
        {event.available ? 'พร้อมขาย' : 'ขายหมดแล้ว'}
      </p>
      {event.available && (
        <Link href={`/booking/${event.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          จองเลย
        </Link>
      )}
    </div>
  );
}