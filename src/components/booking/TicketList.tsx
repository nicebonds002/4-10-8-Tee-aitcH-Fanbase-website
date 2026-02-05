'use client';

import Link from 'next/link';
import styles from '@/components/booking/TicketList.module.css';

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

export default function TicketList({ events }: { events: Event[] }) {
  return (
    <div className={styles.grid}>
      {events.map((event, index) => (
        <article
          key={event.id}
          className={styles.card}
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <img
            src={event.imageUrl || '/images/placeholder.jpg'}
            alt={event.name}
            className={styles.image}
          />

          <div className={styles.content}>
            <h3 className={styles.name}>{event.name}</h3>
            <p className={styles.meta}>📍 {event.location}</p>
            <p className={styles.meta}>📅 {event.date}</p>

            <p className={styles.description}>{event.description}</p>

            <div className={styles.footer}>
              <span className={styles.price}>
                ฿{event.price.toLocaleString()}
              </span>

              {event.available ? (
                <Link
                  href={`/booking/${event.id}`}
                  className={styles.button}
                >
                  จองตั๋ว
                </Link>
              ) : (
                <button className={styles.button} disabled>
                  Sold Out
                </button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
