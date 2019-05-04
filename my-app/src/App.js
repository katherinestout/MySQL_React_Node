import React, { Component } from 'react';
//import axios from 'axios';
//import cors from 'cors';

class App extends Component {
  state = {
    flavors: [],
    flavor: {
      type: '',
      price: ''
    }
  }
  

  componentDidMount(){
    this.getFlavors();
  }

  getFlavors =()=> {
   fetch("http://localhost:5000/flavors")
   .then(response => response.json())
   .then(response => this.setState({flavors: response.data}))
   .catch(err => console.log(err))
  }

  addFlavor = () => {
    const { flavor } = this.state;
    console.log(flavor);
    fetch(`http://localhost:5000/flavors/add?type=${flavor.type}&price=${flavor.price}`)
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }

  renderFlavor = ({id, type}) => <div key={id}>{type}</div>

  
  render() {

    const { flavors, flavor} = this.state;

    return (
      <div className="App">

        {flavors.map(this.renderFlavor)}
        
        <input
         value={flavor.type}
        onChange={e => this.setState({flavor: {...flavor, type: e.target.value}})}
        />
        <input 
        value={flavor.price}
         onChange={e => this.setState({flavor: {...flavor, price: e.target.value}})}
        />

        <button onClick={this.addFlavor} > Add a flavor!</button>
      </div>
    )
  }
}
export default App;

