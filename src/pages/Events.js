import React, { useState } from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import "./Events.css";

const initialEvents = [
 
    { id: 1, title: "Community Prayer", date: "2025-04-10", location: "City Hall", category: "Religious",image: "/assets/images/1.jpg",description:"Gather with people of all faiths for a peaceful and uplifting communal prayer session." },
  
    { id: 3, title: "Cultural Fest", date: "2025-04-20", location: "Community Center", category: "Social",image:"/assets/images/3.jpg",description:"Experience a vibrant celebration of diverse cultures through music, dance, and traditions." },
    { id: 4, title: "Bible Study Session", date: "2025-05-05", location: "Local Church", category: "Religious",image:"/assets/images/4.jpg",description:"Engage in deep discussions and reflections on scripture in a supportive community." },
    { id: 5, title: "Youth Leadership Workshop", date: "2025-05-12", location: "Church Hall", category: "Social",image:"/assets/images/5.jpeg",description:"Empower young minds with leadership skills, confidence, and community-building strategies." },
    { id: 6, title: "Mental Wellness Seminar", date: "2025-05-20", location: "Wellness Center", category: "Social",image:"/assets/images/6.avif",description:"Learn about mental health, stress management, and self-care from expert speakers." },
    { id: 7, title: "Church Choir Performance", date: "2025-06-01", location: "Main Cathedral", category: "Religious",image:"/assets/images/7.jpeg",description:"Enjoy an inspiring musical evening with soul-stirring hymns and choral performances." },
    { id: 8, title: "Elderly Care Volunteering", date: "2025-06-10", location: "Senior Care Home", category: "Charity",image:"/assets/images/8.jpg",description:"Spend meaningful time with senior citizens, offering companionship and support." },
    { id: 9, title: "Faith & Worship Retreat", date: "2025-06-15", location: "Mountain Resort", category: "Religious",image:"/assets/images/9.jpg",description:"A serene getaway for spiritual renewal, prayer, and faith-based discussions." },
    { id: 10, title: "Annual Community Potluck", date: "2025-06-25", location: "Community Park", category: "Social",image:"/assets/images/10.jpg",description:"Share delicious homemade meals and strengthen community bonds over food." },
    { id: 11, title: "Christmas Charity Event", date: "2025-12-20", location: "City Auditorium", category: "Charity",image:"/assets/images/11.avif",description:"Spread joy and kindness through donations, gifts, and festive celebrations for those in need." },
    { id: 12, title: "Easter Celebration Service", date: "2025-04-01", location: "Local Church", category: "Religious",image:"/assets/images/12.jpg",description:"Celebrate the spirit of Easter with a heartfelt service and community gathering." },
    { id: 13, title: "Blood Donation Drive", date: "2025-07-05", location: "Community Hall", category: "Charity",image:"/assets/images/13.jpeg",description:"Give the gift of life by donating blood to help hospitals and those in need." },
    { id: 14, title: "Youth Talent Showcase", date: "2025-08-15", location: "School Auditorium", category: "Social",image:"/assets/images/14.jpg",description:"A platform for young talents to shine in music, dance, poetry, and more." },
    { id: 15, title: "Family Counseling Session", date: "2025-09-10", location: "Wellness Center", category: "Social",image:"/assets/images/15.jpg",description:"A safe space for families to receive guidance and strengthen relationships." },
    { id: 16, title: "Interfaith Dialogue & Discussion", date: "2025-10-05", location: "University Hall", category: "Religious",image:"/assets/images/16.jpeg",description:"Engage in meaningful conversations to foster understanding between different faiths." }
];

function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  // Get unique categories from events
  const categories = ["All", ...new Set(events.map(event => event.category))];

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="events-page">
      <h2 className="events-title">Upcoming Events</h2>

      {/* Category Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="category">Filter by Category: </label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Filtered Events List */}
      <EventList events={filteredEvents} />

      {/* Event Form */}
      <div className="Event">
        <h1>Join Us And Take a Step Forward....</h1>
        <EventForm addEvent={addEvent} />
      </div>
    </div>
  );
}

export default Events;
