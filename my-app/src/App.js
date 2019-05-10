import React, { Component } from 'react';
import FlavorCard from './FlavorCard';
import Wrapper from './Wrapper';
import './App.css';
import Footer from './Footer';


class App extends Component {
  //set initial states so we can reset form inputs
initialState = { 
  flavors: [],
  flavor: {type:'', price:'', id:''},
  typeError: "",
  priceError: "" 
}; 

state = this.initialState;
  
/*after all elements of page are rendered correctly, this method is called
it is called to either fetch data from external API or perform some unique operations
in this case, get all of the flavors
*/
  componentDidMount(){
    this.getFlavors();
  }

  //clearing form when submitted, resetting state to initial state
  handleFormReset = () => {
    this.setState(() => this.initialState)
  }
 
  //getting all flavors, using fetch
  getFlavors =()=> {
   fetch("/flavors",
   {method: 'GET'})
   .then(response => response.json())
   .then(response => this.setState({flavors: response.data}))
   .catch(err => console.log(err))
  }

 
//add flavor
  addFlavor = () => {
    const { flavor } = this.state;
    fetch(`/flavors/add?type=${flavor.type}&price=${flavor.price}`, 
    {method: 'POST'})
    .then(this.handleFormReset)
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }

 
//delete flavor, based on id
  handleClick = (id) => {
      fetch(`/flavors/delete?id=${id}`,
      {method: 'DELETE'})
      .then(this.getFlavors)
      .catch(err => console.log(err))
    }


//update a flavor to mint chocolate chip, based on id
  handleUpdate = (id) => {
    fetch(`/flavors/update?id=${id}`,
    {method: 'PUT'})
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }


//error handling for blank form inputs
validate = () => {
  let typeError = "";
  let priceError = "";

  if(!this.state.flavor.type){
    typeError = "You must type a flavor!";
  }
  if(!this.state.flavor.price){
    priceError = "You must give a price!";

  } if(typeError || priceError){
    this.setState({priceError, typeError});
    return false;
  }
  //if passed return true
  return true;
     };


  onSubmit = event => {
    event.preventDefault();
      const isValid = this.validate();
//if it passed validation then addFlavor
      if(isValid){
       this.addFlavor();
      }
  };

  render() {

    const { flavors, flavor} = this.state;


    return (
      <div className="App">
      <div className="container">
      <div className="wrapper">

      <div className="list-info">
      <div className="list-info-list">
      <h1> <i className="fas fa-ice-cream"> </i> Kat's Ice Cream Shop <i className="fas fa-ice-cream"></i></h1>
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

     <form onSubmit={this.onSubmit}>
        <p>Flavor:</p>
        <input
         value={this.state.flavor.type}
        onChange={e => this.setState({flavor: {...flavor, type: e.target.value}})}
        />
        <div className="error">{this.state.typeError}</div>
  
        <p>Price:</p>
        <input 
        value={this.state.flavor.price}
         onChange={e => this.setState({flavor: {...flavor, price: e.target.value}})}
        />
      <div className="error">{this.state.priceError}</div>

       <br></br>
        <button 
        className="add-button" 
        type= "submit"
        > Add a flavor!</button>

      </form>

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

