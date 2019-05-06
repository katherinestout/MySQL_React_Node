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

