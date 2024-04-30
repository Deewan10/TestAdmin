import React from 'react';
import { LineChart, Line } from "recharts";


const Card2 = () => {

    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];

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
