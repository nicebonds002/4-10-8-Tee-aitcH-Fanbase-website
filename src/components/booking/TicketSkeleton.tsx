import styles from '@/components/booking/TicketSkeleton.module.css';

export default function TicketSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={styles.card} />
      ))}
    </div>
  );
}
