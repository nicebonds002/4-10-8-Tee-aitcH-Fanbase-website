import { News } from "@/components/news/news";
import NewsCard from "./NewsCard";
import styles from "./NewsList.module.css";

interface Props {
  newsList: News[];
}

export default function NewsList({ newsList }: Props) {
  return (
    <section className={styles.list}>
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </section>
  );
}
