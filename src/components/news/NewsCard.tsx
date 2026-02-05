import { useState } from "react";
import { News } from "@/components/news/news";
import styles from "@/components/news/NewsCard.module.css";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  const [imgError, setImgError] = useState(false);

  // NEW ถ้าข่าวไม่เกิน 3 วัน
  const isNew =
    Date.now() - new Date(news.date).getTime() <
    3 * 24 * 60 * 60 * 1000;

  return (
    <article
      className={styles.card}
      data-new={isNew ? "true" : undefined}
      data-unread={news.isUnread !== false ? "true" : undefined}
      data-loading={news.isLoading ? "true" : undefined}
    >
      <img
        src={imgError ? "/images/news-fallback.jpg" : news.image}
        alt={news.title}
        className={styles.image}
        onError={() => setImgError(true)}
      />

      <div className={styles.content}>
        <span className={styles.category}>{news.category}</span>
        <h2 className={styles.title}>{news.title}</h2>
        <time className={styles.date}>{news.date}</time>
        <p className={styles.summary}>{news.summary}</p>
      </div>
    </article>
  );
}
