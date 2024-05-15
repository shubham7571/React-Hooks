import React, { useState, useEffect } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch("https://your-api-endpoint.com/events");
    const data = await response.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded"
          >
            <h2 className="text-xl font-bold mb-2">{event.date}</h2>
            <p className="text-gray-600">
              {event.policy} - <strong>{event.medium}</strong>
            </p>
            <p className="text-gray-600">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;