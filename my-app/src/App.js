import React, { Component } from 'react';
//import axios from 'axios';
//import cors from 'cors';
import FlavorCard from './FlavorCard';
import Wrapper from './Wrapper';
import './App.css';
import Footer from './Footer';


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
  
      fetch(`http://localhost:5000/flavors/delete?id=${id}`)
      .then(this.getFlavors)
      .catch(err => console.log(err))
    }

  handleUpdate = (id) => {
    fetch(`http://localhost:5000/flavors/update?id=${id}`)
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }


  render() {

    const { flavors, flavor} = this.state;

    return (
      <div className="App">
      <div className="container">
      <div className="wrapper">

      <div className="list-info">
      <div className="list-info-list">
      <h1> <i class="fas fa-ice-cream"> </i> Kat's Ice Cream Shop <i class="fas fa-ice-cream"></i></h1>
      <h2>Add a new flavor to the shop!</h2>
      <h3>You can add, delete, and update flavors.</h3>
      </div>
      </div>

      <div className="list">
      <div className="list-grid">

     
       <Wrapper>
        {flavors.map(flavor => (

          <FlavorCard
          id={flavor.id}
          key={flavor.id}
          type={flavor.type}
          price={flavor.price}
          handleClick={this.handleClick}
          handleUpdate ={this.handleUpdate}
          />

         
        ))}
  
     </Wrapper>
     

     <div className="list-grid-two">
        <p>Type:</p>
        <input
      
         value={flavor.type}
        onChange={e => this.setState({flavor: {...flavor, type: e.target.value}})}
        />
  
        <p>Price:</p>
        <input 

        value={flavor.price}
         onChange={e => this.setState({flavor: {...flavor, price: e.target.value}})}
        />
    <br></br>
        <button 
        className="add-button" onClick={this.addFlavor} > Add a flavor!</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Footer></Footer>
      </div>
    )
  }
}
export default App;

