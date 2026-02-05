'use client';

import { useEffect, useState } from 'react';
import TicketList from '@/components/booking/TicketList';
import TicketSkeleton from '@/components/booking/TicketSkeleton';
import styles from '@/components/booking/TicketPage.module.css';

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

export default function TicketPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        if (!res.ok) throw new Error();
        const data: Event[] = await res.json();
        setEvents(data);
      } catch {
        setError('โหลดข้อมูลไม่สำเร็จ');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎵 จองตั๋วคอนเสิร์ต</h1>
      <p className={styles.subtitle}>
        เลือกอีเวนต์ที่คุณชอบ แล้วจองได้ทันที
      </p>

      {loading ? (
        <TicketSkeleton />
      ) : events.length === 0 ? (
        <div className={styles.empty}>ยังไม่มีอีเวนต์</div>
      ) : (
        <TicketList events={events} />
      )}
    </div>
  );
}