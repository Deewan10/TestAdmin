import React from 'react';
import Cards from './Card'
import Card2 from './Card2.jsx'
import BarChart from './BarChart';
import Circle from './Circle.jsx';
import MyCard from './MyCard.jsx';
import AtmCard1 from './DebitCard.jsx'
import Card3 from './Card3.jsx';


import { FiUber, FiShoppingBag, FiNetflix } from 'react-icons/fi';
function Main() {
  return (
    <div className="main">

      <div className="main-left">
        <Cards/>
        <BarChart/>
        <Card3 />
        <Card2 />
      </div>



      <div className="main-right">
        <div className="tab">

          <Circle />

          <MyCard />

          <AtmCard1 />

          <div className="transaction">
            <p>Transaction</p>
            <h4>+</h4>
          </div>
          <div class="details">
            <div class="item">
                
                <div class="txt3">
                    <h4>Taxi</h4>
                    <p>01:22PM</p>
                </div>
                <h3>-$9,20</h3>
            </div>

            <div class="item">
                
                <div class="txt3">
                    <h4>Shopping</h4>
                    <p>11:15AM</p>
                </div>
                <h3>-$142.00</h3>
            </div>
            <div className="item">
             
              <div className="txt3">
                <h4>Netflix</h4>
                <p>Jan 10, 2020.</p>
              </div>
              <h3>-$24.99</h3>
            </div>
          </div>
           
         
        </div>
      </div>
        
      
    </div>
  );
}

export default Main;
