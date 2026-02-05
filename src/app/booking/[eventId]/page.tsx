'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/app/booking/[eventId]/page.module.css';

interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'booked' | 'vip';
  price: number;
}

const mockSeats: Seat[] = [
  { id: 'A1', row: 'A', number: 1, status: 'available', price: 1500 },
  { id: 'A2', row: 'A', number: 2, status: 'booked', price: 1500 },
  { id: 'A3', row: 'A', number: 3, status: 'vip', price: 2500 },
  { id: 'B1', row: 'B', number: 1, status: 'available', price: 1500 },
  { id: 'B2', row: 'B', number: 2, status: 'available', price: 1500 },
  { id: 'B3', row: 'B', number: 3, status: 'vip', price: 2500 },
  { id: 'C1', row: 'C', number: 1, status: 'available', price: 1500 },
  { id: 'C2', row: 'C', number: 2, status: 'booked', price: 1500 },
  { id: 'C3', row: 'C', number: 3, status: 'vip', price: 2500 },
];

const mockRounds = ['รอบเช้า 10:00', 'รอบบ่าย 14:00', 'รอบเย็น 18:00'];

export default function BookingPage() {
  const { eventId } = useParams();
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [selectedRound, setSelectedRound] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const seatsByRow = mockSeats.reduce((acc, seat) => {
    acc[seat.row] = acc[seat.row] || [];
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  const handleConfirm = () => {
    if (!selectedSeat || !selectedRound) return;
    alert(
      `จองสำเร็จ\nอีเวนต์ ${eventId}\nที่นั่ง ${selectedSeat.id}\nรอบ ${selectedRound}`
    );
    setConfirmed(true);
  };

  if (confirmed) {
    return <div className={styles.success}>🎉 การจองเสร็จสมบูรณ์!</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>จองตั๋วอีเวนต์ #{eventId}</h1>

      {/* เลือกรอบ */}
      <section className={styles.section}>
        <h2>เลือกรอบเวลา</h2>
        <div className={styles.rounds}>
          {mockRounds.map((round) => (
            <button
              key={round}
              onClick={() => setSelectedRound(round)}
              className={`${styles.roundBtn} ${
                selectedRound === round ? styles.active : ''
              }`}
            >
              {round}
            </button>
          ))}
        </div>
      </section>

      {/* แผนที่นั่ง */}
      <section className={styles.section}>
        <h2>เลือกที่นั่ง</h2>

        <div className={styles.stage}>เวที (Stage)</div>

        {Object.entries(seatsByRow).map(([row, seats]) => (
          <div key={row} className={styles.row}>
            <p className={styles.rowLabel}>แถว {row}</p>
            <div className={styles.seats}>
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  disabled={seat.status === 'booked'}
                  onClick={() => setSelectedSeat(seat)}
                  className={`${styles.seat} ${styles[seat.status]} ${
                    selectedSeat?.id === seat.id ? styles.selected : ''
                  }`}
                  title={`${seat.id} - ${seat.price} บาท`}
                >
                  {seat.number}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* สรุป */}
      {selectedSeat && selectedRound && (
        <section className={styles.summary}>
          <p>🎟 ที่นั่ง: {selectedSeat.id}</p>
          <p>⏰ รอบ: {selectedRound}</p>
          <p>💰 ราคา: {selectedSeat.price} บาท</p>
        </section>
      )}

      <button
        onClick={handleConfirm}
        disabled={!selectedSeat || !selectedRound}
        className={styles.confirmBtn}
      >
        ยืนยันการจอง
      </button>
    </div>
  );
}
