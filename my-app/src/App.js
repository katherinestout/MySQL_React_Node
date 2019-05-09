import React, { Component } from 'react';
import FlavorCard from './FlavorCard';
import Wrapper from './Wrapper';
import './App.css';
import Footer from './Footer';


class App extends Component {
  //set initial state (of the flavor) so we can reset form inputs
  initialState = {type:'', price:'', id:''}

  state = {
    flavors: [],
    flavor: this.initialState
  }

  //clearing form when submitted
  handleFormReset = () => {
    this.setState(() => this.initialState)
  }
  
  
/*after all elements of page are rendered correctly, this method is called
it is called to either fetch data from external API or perform some unique operations
in this case, get all of the flavors
*/
  componentDidMount(){
    this.getFlavors();
  }

  //getting all flavors, using fetch
  getFlavors =()=> {
   fetch("localhost:5000/flavors",
   {method: 'GET'})
   .then(response => response.json())
   .then(response => this.setState({flavors: response.data}))
   .then(this.handleFormReset)
   .catch(err => console.log(err))
  }


//add flavor
  addFlavor = () => {
    const { flavor } = this.state;
    fetch(`localhost:5000/flavors/add?type=${flavor.type}&price=${flavor.price}`, 
    {method: 'POST'})
    .then(this.getFlavors)
    .catch(err => console.log(err))
  }


//delete flavor, based on id
  handleClick = (id) => {
      fetch(`localhost:5000/flavors/delete?id=${id}`,
      {method: 'DELETE'})
      .then(this.getFlavors)
      .catch(err => console.log(err))
    }


//update a flavor to mint chocolate chip, based on id
  handleUpdate = (id) => {
    fetch(`localhost:5000/flavors/update?id=${id}`,
    {method: 'PUT'})
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

     <form onReset={this.handleFormReset}>
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

