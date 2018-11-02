import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div>Rapid Courier USA</div>
          <div className="menu">
            <p>Services</p>
            <p>Contact</p>
          </div>
        </header>
        <div className="services">
          <h2>Services</h2>
          <div>
            <p>
              <span>Secure</span><br/>
              We can safely handle and deliver up to 500lbs of goods
            </p>

            <p>
              <span>Fast</span><br/>
              Get your goods delivered exactly when you need them
            </p>

            <p>
              <span>Anywhere</span><br/>
              Rapid Courier USA operates anywhere within the tri-state area
            </p>
          </div>

          <p>
            Rapid Courier USA is a trusted and expedient on demand delivery service.
            Our services are customizable per client needs. Get <strong>packages</strong> or <strong>Important Documents</strong> delivered across the <strong>Tri-State</strong> area on a <strong>One-Time</strong>  or a <strong>Regulary Scheduled</strong> basis.
          </p>
        </div>


        <div className="contact">
          <h2>For more information and quotes:</h2>
          <p>Email: rapidcourierusa@gmail.com</p>
          <p>Call: (000) 000-0000</p>
        </div>

        <div className="footer">
          <p>
            Copyright © 2018. All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}

export default App;
