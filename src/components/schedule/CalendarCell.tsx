
"use client";
import { IdolEvent } from "@/components/schedule/event";


type Props = {
  date: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
  events: IdolEvent[];
  onEventClick?: (event: IdolEvent) => void;
};

export default function CalendarCell({
  date,
  isToday,
  isCurrentMonth,
  events,
  onEventClick,
}: Props) {

  // ✅ เพิ่ม: เรียง startTime ก่อน ถ้าเท่ากันเรียง endTime
  const sortedEvents = [...events].sort((a, b) => {
    const startCompare = a.startTime.localeCompare(b.startTime);
    if (startCompare !== 0) return startCompare;

    return a.endTime.localeCompare(b.endTime);
  });

  return (
    <div
      className={`cell ${isToday ? "today" : ""} ${
        !isCurrentMonth ? "muted" : ""
      }`}
    >
      <span className="date">{date.getDate()}</span>

      <div className="cell-content">
        {sortedEvents.slice(0, 2).map(ev => (
          <div
            key={ev.id}
            className="event-pill"
            style={{ backgroundColor: ev.color }}
            onClick={() => onEventClick?.(ev)}
          >
            {ev.startTime} {ev.title}
          </div>
        ))}

        {sortedEvents.length > 2 && (
          <div className="more">+{sortedEvents.length - 2} more</div>
        )}
      </div>
    </div>
  );
}