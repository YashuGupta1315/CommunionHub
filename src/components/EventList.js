import React from "react";
import "../pages/Events.css"; // Correct path


function EventList({ events }) {
  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-image">
            <img src={event.image} alt={event.title} />
            <div className="event-description">
              <p>{event.description}</p>
            </div>
          </div>
          <div className="event-info">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="category">{event.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
