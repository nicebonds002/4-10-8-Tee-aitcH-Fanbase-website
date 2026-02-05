export interface News {
  title: string;
  image: string;
  category: string;
  date: string;
  summary: string;

  isUnread?: boolean;   // default = true
  isLoading?: boolean;  // shimmer
}
