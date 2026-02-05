import { IdolEvent } from "@/components/schedule/event";

export type EventMap = Record<string, IdolEvent[]>;

export function buildEventMap<T extends { date: string }>(
  events: T[]
): Record<string, T[]> {
  return events.reduce((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = [];
    acc[ev.date].push(ev);
    return acc;
  }, {} as Record<string, T[]>);
}

