import React from 'react'

const Traveler = ({ title, paragraphs = [] }) => {
  return (
    <div className="traveler">
        <div className="traveler-content">
          <h3>{title}</h3>
          {paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
    </div>
  )
}

export default Traveler
