export interface MenuItem {
  id: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  { id: "", label: "Home" },
  { id: "news", label: "News" },
  { id: "members", label: "Members" },
  { id: "schedule", label: "Schedule"},
  { id: "discography", label: "Discography"},
  { id: "booking", label: "Booking"}
];