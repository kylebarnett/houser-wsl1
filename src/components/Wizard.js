import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

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
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAddressChange= (event) => {
    this.setState({
      address: event.target.value
    })
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleStateChange = (event) => {
    this.setState({
      state: event.target.value
    })
  }

  handleZipChange = (event) => {
    this.setState({
      zip: event.target.value
    })
  }
  componentDidMount() {
    const { name, address, city, state, zip } = this.state
    const addHouse = { name, address, city, state, zip }
    axios.post('http://localhost:7771/api/house', addHouse).then(results => {
      this.setState({
        name: results.data,
        address: results.data,
        city: results.data,
        state: results.data,
        zip: results.data
      })
    })
  }
  render() { 
    return (
      <div>
        <input placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
        <input placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}/>
        <input placeholder="City" value={this.state.city} onChange={this.handleCityChange}/>
        <input placeholder="State" value={this.state.state} onChange={this.handleStateChange}/>
        <input value={this.state.zip} onChange={this.handleZipChange}/>
        <button>Complete</button>
        <Link to="/"><button>Cancel</button></Link>
      </div>
    );
  }
}
 
export default Wizard;