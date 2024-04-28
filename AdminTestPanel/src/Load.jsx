import React from 'react';
import { FaUber, FaShoppingBag, FaNetflix } from 'react-icons/fa'; // Importing icons from react-icons library

const Load = () => {
  return (
    <div className="toast">
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

      <div className="atm"></div>

      <div className="trans">
        <p>Transaction</p>
        <h4>+</h4>
      </div>

      <div className="details">
        <div className="item">
          <FaUber /> 
          <div className="txt3">
            <h4>Taxi</h4>
            <p>01:22PM</p>
          </div>
          <h3>-$9.20</h3>
        </div>

        <div className="item">
          <FaShoppingBag /> 
          <div className="txt3">
            <h4>Shopping</h4>
            <p>11:15AM</p>
          </div>
          <h3>-$142.00</h3>
        </div>

        <div className="item">
          <FaNetflix /> 
          <div className="txt3">
            <h4>Netflix</h4>
            <p>Jan 10, 2020.</p>
          </div>
          <h3>-$24.99</h3>
        </div>
      </div>
    </div>
  );
};

export default Load;