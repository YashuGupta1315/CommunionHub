import React, { useState } from "react";
import "../pages/Events.css";

function EventForm({ addEvent }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setFormData({ title: "", date: "", location: "", category: "", image: "", description: "" });
  };

  return (
    <div className="event-container">
      {/* Left Section - Logo */}
      <div className="event-left">
        <img src="/assets/images/logoo.png" alt="CommunionHub Logo" className="event-logo" />
      </div>

      {/* Right Section - Form */}
      <div className="event-right">
        
        <form className="event-form" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Event Title" value={formData.title} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Charity">Charity</option>
            <option value="Social">Social</option>
          </select>
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          <textarea name="description" placeholder="Event Description" value={formData.description} onChange={handleChange} required />
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
