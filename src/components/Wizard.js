import React, { Component } from 'react';

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
  }
  render() { 
    return (
      <div>
        Wizard!
      </div>
    );
  }
}
 
export default Wizard;