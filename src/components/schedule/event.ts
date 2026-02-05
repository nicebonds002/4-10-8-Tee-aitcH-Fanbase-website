// types/event.ts
export interface IdolEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  type: "live" | "handshake" | "online" | "festival";
  group: string;
  location: string;
  members: string[];
  color?: string;
}
