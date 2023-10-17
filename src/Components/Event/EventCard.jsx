import React from 'react';
import './Event.css'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ eventName, cover }) => {
  const navigate = useNavigate();

  const eventDetails = {
    eventName,
    cover
  };

  const handleRegisterClick = () => {
    // Navigate to the "/details" route and pass the "title" as a prop
    navigate('/details',);
  };

  return (
    <div className="card m-3">
      <div className="card-image">
        <img src={cover} alt={eventName} />
      </div>
      <div className="card-details">
        <h5 className="card-title text-warning">{eventName}</h5>
        <button className='btn btn-warning' onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Card;
