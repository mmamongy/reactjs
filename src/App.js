import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import VendorsList from './vendors-list' ;
import axios from 'axios';
// functional component 
class App extends Component {
  state = {
    venuesList:[]
  }

  componentWillMount() {
    axios.get('./mock/venuesList.json')
    .then(res=> {
       console.log(res.data.content) ;
       this.setState({ venuesList: res.data.content})
    })
    .catch((err) => {
     console.log(err);
  })

}
  handelFilter = (cityName) => {this.state.venuesList.filter( o =>  o.city === cityName )}

  render() {
    return (
      <div className="container">
       <Search onChange={this.handelFilter}/>
       <VendorsList venues={this.state.venuesList}  />
       </div>
    );
  }
}

export default App;
