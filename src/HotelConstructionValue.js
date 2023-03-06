import React, { useState } from 'react';
import './style.css';


function HotelConstructionValue() {
  const [rooms, setRooms] = useState(0);
  const [time, setTime] = useState(0);
  const [brandType, setBrandType] = useState('');
  const [projectType, setProjectType] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [furnished, setFurnished] = useState(false);
  const [constructionValue, setConstructionValue] = useState(0);

  function handleRoomsChange(event) {
    setRooms(parseInt(event.target.value));
  }

  function handleTimeChange(event) {
    setTime(parseInt(event.target.value));
  }

  function handleBrandTypeChange(event) {
    setBrandType(event.target.value);
  }

  function handleProjectTypeChange(event) {
    setProjectType(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleFurnishedChange(event) {
    setFurnished(event.target.checked);
  }

  function handleCalculate() {
    let value = 0;

    // calculate base value based on rooms and time
    value += rooms * 100000 + time * 10000;

    // calculate additional value based on brand type
    switch (brandType) {
      case 'Budget':
        value += 50000;
        break;
      case 'Luxury':
        value += 200000;
        break;
      default:
        break;
    }

    // calculate additional value based on project type
    switch (projectType) {
      case 'New Construction':
        value += 100000;
        break;
      case 'Renovation':
        value += 50000;
        break;
      default:
        break;
    }

    // calculate additional value based on location
    switch (location) {
      case 'Downtown':
        value += 50000;
        break;
      case 'Suburban':
        value += 25000;
        break;
      default:
        break;
    }

    // calculate additional value based on city
    switch (city) {
      case 'New York':
        value += 150000;
        break;
      case 'Los Angeles':
        value += 100000;
        break;
      default:
        break;
    }

    // calculate additional value based on furnished option
    if (furnished) {
      value += 75000;
    }

    setConstructionValue(value);
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="rooms">Number of Rooms:</label>
        <input
          type="number"
          id="rooms"
          className="form-control"
          value={rooms}
          onChange={handleRoomsChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time to Build (in months):</label>
        <input
          type="number"
          id="time"
          className="form-control"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand-type">Brand Type:</label>
        <select
          id="brand-type"
          className="form-control"
          value={brandType}
          onChange={handleBrandTypeChange}
        >
          <option value="">Select Brand Type</option>
          <option value="Budget">Budget</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="project-type">Project Type:</label>
        <select
          id="project-type"
          className="form-control"
          value={projectType}
          onChange={handleProjectTypeChange}
        >
          <option value="">Select Project Type</option>
          <option value="New Construction">New Construction</option>
          <option value="Renovation">Renovation</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          className="form-control"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">Select Location</option>
          <option value="Downtown">Downtown</option>
          <option value="Suburban">Suburban</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          className="form-control"
          value={city}
          onChange={handleCityChange}
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="furnished">Furnished:</label>
        <input
          type="checkbox"
          id="furnished"
          className="form-control"
          checked={furnished}
          onChange={handleFurnishedChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      <div className="form-group">
        <h3>Construction Value:</h3>
        <h2>${constructionValue.toLocaleString()}</h2>
      </div>
    </div>
  );
}

  export default HotelConstructionValue
