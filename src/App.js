import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FaLock, FaMap, FaShippingFast, FaClock, FaPhone, FaEnvelope} from 'react-icons/fa';

class App extends Component {


  scroll(sec) {
    this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <div className="bg" />

          <header>
            <div>
              <h1 style={{color: '#2196f3', fontSize: '35px'}}>Rapid Courier USA</h1>
            </div>

            <div className="menu">
              <p onClick={this.scroll.bind(this, 'services')}>Services</p>
              <p onClick={this.scroll.bind(this, 'contact')}>Contact</p>
            </div>
          </header>

          <h2 style={{background: 'rgba(0,0,0,.5)', padding: 20}}>Rapid Courier USA is a <span style={{color: "#2196f3"}}>Trusted</span> and <span style={{color: "#2196f3"}}>Expedient</span> on demand delivery service.</h2>
          <FaShippingFast className="FaShippingFast" />
        </div>

        <div ref="services" className="services">
          <h2>Services</h2>
          <div className="icons">

            <div style={{fontSize: 21, flexDirection: 'column', padding: 20}}>
              <FaLock style={{color: '#2196f3', fontSize: 45}} /><br/>
              <strong className="icon-title">Secure</strong>
              <p>
                We can safely handle and deliver up to 500 lbs of goods
              </p>
            </div>

            <div style={{fontSize: 21, flexDirection: 'column', padding: 20}}>
              <FaClock style={{color: '#2196f3', fontSize: 45}} /><br/>
              <strong className="icon-title">Fast</strong>
              <p>
                Get your goods delivered exactly when you need them
              </p>
            </div>

            <div style={{fontSize: 21, flexDirection: 'column', padding: 20}}>
              <FaMap style={{color: '#2196f3', fontSize: 45}} /><br/>
              <strong className="icon-title">Anywhere</strong>
              <p>
                Rapid Courier USA operates anywhere within the tri-state area
              </p>
            </div>
          </div>

          <p style={{padding: 100, background: '#fff', color: '#000', fontSize: 21}} >
            Our services are customizable per client needs. Get <strong style={{fontWeight: '900', color: '#ffc107'}}>Packages</strong> or <strong style={{fontWeight: '900', color: '#ffc107'}}>Important Documents</strong> delivered across the <strong style={{fontWeight: '900', color: '#ff8f00'}}>Tri-State</strong> area on a <strong style={{fontWeight: '900', color: '#ffc107'}}>One-Time</strong>  or a <strong style={{fontWeight: '900', color: '#ffc107'}}>Regulary Scheduled</strong> basis.
          </p>
        </div>


        <div ref="contact" className="contact">
          <h2>For more information and quotes:</h2>
          <div>
           <p>
              <FaEnvelope style={{color: '#2196f3', fontSize: 41}} /> rapidcourierusa@gmail.com
            </p><br/>
            <p>
              <FaPhone style={{color: '#2196f3', fontSize: 41}} /> (000) 000-0000
            </p>
          </div>

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
