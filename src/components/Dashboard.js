import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }
  render() { 
    return (
      <div>
        Dashboard!
      </div>
    );
  }
}
 
export default Dashboard;