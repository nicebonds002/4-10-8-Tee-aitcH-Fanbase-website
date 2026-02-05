"use client";

import { useEffect, useState } from "react";
import NewsList from "@/components/news/NewsList";
import { News } from "@/components/news/news";

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then(setNews);
  }, []);

  return <NewsList newsList={news} />;
}
