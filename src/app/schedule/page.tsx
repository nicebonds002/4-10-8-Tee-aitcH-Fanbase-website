"use client";

import { useEffect, useMemo, useState } from "react";
import Calendar from "@/components/schedule/Calendars";
import CalendarHeader from "@/components/schedule/CalendarHeader";
import EventModal from "@/components/schedule/EventModal";
import { IdolEvent } from "@/components/schedule/event";
import { buildEventMap } from "@/utils/eventMap";

export default function SchedulePage() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<IdolEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<IdolEvent | null>(null);

  useEffect(() => {
    fetch("/data/event.json")
      .then(res => res.json())
      .then(data => {
        const normalized: IdolEvent[] = data.events.map((e: any) => ({
          id: e.event_id,
          title: e.event_name,
          date: e.date,
          startTime: e.time.start,
          endTime: e.time.end,
          type: e.event_type,
          group: e.idol_group.group_name,
          location: e.location.venue_name,
          members: e.performers.map((p: any) => p.name),
          color: "#4f46e5",
        }));

        setEvents(normalized);
      });
  }, []);

  const eventMap = useMemo(() => buildEventMap(events), [events]);

  return (
    <div className="schedule-page">
      <CalendarHeader
        currentDate={date}
        onPrev={() =>
          setDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))
        }
        onNext={() =>
          setDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))
        }
        onToday={() => setDate(new Date())}
        onChangeMonthYear={(y, m) => setDate(new Date(y, m, 1))}
      />

      <Calendar
        date={date}
        eventMap={eventMap}
        onEventClick={setSelectedEvent}
      />

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
