import React from 'react';
import Cards from './Card'
import BarChart from './BarChart';
import atmCard from './assets/Group 8.png';
function Main() {
  return (
    <div className="main">

      <div className="main-left">
        <Cards/>
        <BarChart/>
      </div>



      <div className="main-right">

        <div className="container">
          <div className="circle">
            <div className="small">
              <h4>38%</h4>
            </div>
          </div>
          <div className="arc"></div>
        </div>

        <div className="txt2">
          <p>My Card</p>
          <h3>..</h3>
        </div>

        <div className="atm">
          <img src={atmCard} alt=''></img>
        </div>

        <div className="transaction">
          <p>Transaction</p>
          <h4>+</h4>
        </div>
      </div>

          
    </div>
  );
}

export default Main;
