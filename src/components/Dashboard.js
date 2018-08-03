import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Wizard from './Wizard';
import House from './House';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:7771/api/houses').then(results => {
      this.setState({
        houses: results.data
      })
    })
  }
  render() {
    let houseMap = this.state.houses.map((element, index) => {
      return (
        <House
          id={element.id}
          name={element.name}
          address={element.address}
          city={element.city}
          state={element.state}
          zip={element.zip}
        />
      )
    })
    return (
      <div>
        <Link to="/wizard"><button>Add New Property</button></Link>
        {houseMap}
      </div>
    );
  }
}

export default Dashboard;