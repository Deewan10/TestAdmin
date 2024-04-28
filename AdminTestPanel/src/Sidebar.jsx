import React from 'react';
import { FaHome, FaChartPie, FaComments, FaWallet } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="icons">
        <div className="icon"><FaHome /></div>
        <div className="icon"><FaChartPie /></div>
        <div className="icon"><FaComments /></div>
        <div className="icon"><FaWallet /></div>
      </div>
    </div>
  );
}

export default Sidebar;
