"use client";

import { useEffect } from "react";
import { IdolEvent } from "@/components/schedule/event";

type Props = {
  event: IdolEvent;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: Props) {
  // ESC เพื่อปิด modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />

      <div className="modal">
        <header className="modal-header">
          <h2>{event.title}</h2>
          <button onClick={onClose}>✕</button>
        </header>

        <div className="modal-body">
          {/* TYPE */}
          <div className="modal-section">
            <span className={`modal-badge badge-${event.type}`}>
              {event.type}
            </span>
          </div>

          {/* SCHEDULE */}
          <div className="modal-section">
            <div className="modal-section-title">Schedule</div>
            <div className="modal-meta">
              <span>📅</span>
              <span>Date</span>
              <div>{event.date}</div>

              <span>⏰</span>
              <span>Time</span>
              <div>
                {event.startTime} - {event.endTime}
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="modal-section">
            <div className="modal-section-title">Event Info</div>
            <div className="modal-meta">
              <span>🎤</span>
              <span>Group</span>
              <div>{event.group}</div>

              <span>📍</span>
              <span>Location</span>
              <div>{event.location}</div>
            </div>
          </div>

          {/* MEMBERS */}
          <div className="modal-section">
            <div className="modal-section-title">Members</div>
            <div className="modal-members">
              {event.members.map(m => (
                <div key={m} className="modal-member">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
