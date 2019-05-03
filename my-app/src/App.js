import React, { Component } from 'react';
//import axios from 'axios';
//import cors from 'cors';

class App extends Component {
  state = {
    flavors: []
  }
  componentDidMount(){
    this.getFlavors();
  }

  getFlavors =()=> {
   fetch("http://localhost:5000/flavors")
   .then(response => response.json())
   .then(({data}) => {
     console.log(data)}).catch(err => console.log(err))
  }

  renderFlavor = ({type_id, type}) => <div key={type_id}>{type}</div>
  
  render() {

    const {flavors} = this.state;

    return (
      <div>
        {flavors.map(this.renderFlavor)}
      </div>
    )
  }
}
export default App;

