import React from 'react';

const Card2 = () => {
  return (
    <div className="cont">
      <div className="cont-pic">
        <img src="hh.png" alt="" />
        <div className="text">
          <h4>Lilly Donovan</h4>
          <p>Business Trainer</p>
        </div>
      </div>
      <h4>How to properly manage your personal budget</h4>
      <div className="cont-icon">
        <div className="vid">
          <p>Video</p>
        </div>
        <div className="time">
          <p>15 minutes</p>
        </div>
        <div className="star">
          <p>12 likes</p>
        </div>
      </div>
      <div className="cont-btn">
        <p>5 days ago</p>
        <button>Connect  &gt;</button>
      </div>
    </div>
  );
};

export default Card2;
