import React from 'react';
import PropTypes from 'prop-types';
import './test.css';
export default function Card({ property, currIndex }) {
  const {
    bedrooms,
    bathrooms,
    parkingSpots,
    city,
    address,
    index,
    picture,
  } = property;
  return (
    <div className="card-rec" id={currIndex === index ? 'active-slide' : ''}>
      <img src={picture} alt={city} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p>
          {city} <br />
          {address}
        </p>
        <ul className="features">
          <li className="icon-bed">{bedrooms}</li>
          <li className="icon-bath">{bathrooms}</li>
          <li className="icon-car">{parkingSpots}</li>
        </ul>
      </div>
    </div>
  );
}
Card.propTypes = {
  property: PropTypes.object.isRequired,
};
