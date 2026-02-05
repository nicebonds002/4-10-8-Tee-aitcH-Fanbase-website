"use client";
import { getMonthMatrix, isSameDay } from "@/components/schedule/calendar";
import CalendarCell from "@/components/schedule/CalendarCell";
import { IdolEvent } from "@/components/schedule/event";
import "@/components/schedule/calendar-module.css";

type Props = {
  date: Date;
  eventMap: Record<string, IdolEvent[]>;
  onEventClick?: (event: IdolEvent) => void;
};

export default function Calendar({
  date,
  eventMap,
  onEventClick,
}: Props) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  const days = getMonthMatrix(year, month);

  return (
    <div className="calendar-grid">
      {days.map(d => {
        const key = `${d.getFullYear()}-${String(
          d.getMonth() + 1
        ).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

        return (
          <CalendarCell
            key={key}
            date={d}
            events={eventMap[key] ?? []}
            isToday={isSameDay(d, today)}
            isCurrentMonth={d.getMonth() === month}
            onEventClick={onEventClick}
          />
        );
      })}
    </div>
  );
}