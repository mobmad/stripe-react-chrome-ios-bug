import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  openStripe = () => {
    window.stripeHandler.open({
      name: 'Merchant',
      description: 'A description',
      amount: 1000
    });
  }

 render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stripe/React bug in Chrome on iOS</h2>
        </div>

        <p className="App-intro">
          All buttons should be tested on Chrome iOS to reproduce (using ngrok, browserstack or similar). 
          There seems to be an issue with React event handlers in combination with Stripe Connect "open" function on Chrome iOS. Both these works separately (B2, B3), but not in combination (B1).
        </p>
        
        <p>
          <button onClick={this.openStripe}>B1. Payment button that is buggy. Does not open a new tab on Chrome iOS</button>
        </p>

        <p><button ref={(button) => { 
          button.addEventListener('click', this.openStripe);
        }}>
          B2. Payment button that works, bypassing React event listeners
        </button></p>

        <p><button onClick={() => { window.open('https://www.stripe.com'); }}>B3. window.open itself works with React as expected. Not sure what Stripe does behind the scenes.</button></p>

      </div>
    );
  }
}

export default App;
