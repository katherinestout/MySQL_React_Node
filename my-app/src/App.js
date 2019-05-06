import React, { Component } from 'react';
//import axios from 'axios';
//import cors from 'cors';
import FlavorCard from './FlavorCard';
import Wrapper from './Wrapper';

class App extends Component {
  state = {
    flavors: [],
    flavor: {
      type: '',
      price: '',
      id: ''
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
    fetch(`http://localhost:5000/flavors/add?type=${flavor.type}&price=${flavor.price}`)
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }

  handleClick = (id) => {
  
      console.log('clicked' + id);
      fetch(`http://localhost:5000/flavors/delete?id=${id}`)
      .then(this.getFlavors)
      .catch(err => console.log(err))
    }


  render() {

    const { flavors, flavor} = this.state;

    return (
      <div className="App">
      <h1>Kat's Ice Cream Shop</h1>
      <h2>Add a new flavor to the shop!</h2>
      <h3>You can add, delete, and update flavors.</h3>
       <Wrapper>
        {flavors.map(flavor => (

          <FlavorCard
          id={flavor.id}
          key={flavor.id}
          type={flavor.type}
          price={flavor.price}
          handleClick={this.handleClick}
          />

         
        ))}
  
     </Wrapper>
        <p>Type:</p>
        <input
         value={flavor.type}
        onChange={e => this.setState({flavor: {...flavor, type: e.target.value}})}
        />
        <span>&nbsp;</span> 
        <p>Price:</p>
        <input 
        value={flavor.price}
         onChange={e => this.setState({flavor: {...flavor, price: e.target.value}})}
        />
        <span>&nbsp;</span> 

        <button onClick={this.addFlavor} > Add a flavor!</button>
     
      </div>
    )
  }
}
export default App;

