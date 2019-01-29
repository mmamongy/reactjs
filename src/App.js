import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import VendorsList from './vendors-list' ;
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, IndexRoute,  withRouter } from "react-router-dom";
import Vendor from './components/vendor' ;
// functional component 
class App extends Component {
  state = {
    venuesList:[], 
    resultFilter: [], 
    venues : [] 
  }

  handleDelete = () => {
    //logic
  }
  componentWillMount() {
    axios.get('./mock/venuesList.json')
    .then(res=> {
       console.log(res.data.content) ;
       this.setState({ venuesList: res.data.content}) ;
       this.setState({ resultFilter: res.data.content})
       this.setState({ venus : res.data.content })
    })
    .catch((err) => {
     console.log(err);
  })
}
  handelFilter = (cityName) => {
  console.log('City name ' , cityName )  ;
  console.log( this.state.venuesList) ;
  var temp =  this.state.venuesList.filter( o =>  o.city === cityName.value ) ;
    console.log( this.state.venuesList) ;
    this.setState({resultFilter: temp })

  }

  render() {
    console.log('VENUES  ' ,this.state.venues)
    return (
     
      <Router ecaxt path="/" >
      
      <div className="container">
      <Route path="/:id" component={Vendor}/>
      
       
       <Search onChange={this.handelFilter}/>
       {/* <VendorsList deleteComponent={this.handleDelete} venues={this.state.resultFilter}  /> */}

       <section className="row">
       
       { this.state.resultFilter.map((item,index) =>(
          
          <div className="col-md-4">
        
           <div className="card d-block"  key={item.id }>
           <img src={item.pictureUrl} 
           className="card-img-top" alt={item.name}/>
           <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <h6 className="venue-city">{item.city}</h6>
               <div className="card-text">
               <ul className="card-venu-details">
                   <li key={'1'}><div className="row" >
                   <div className="col-sm-6 text-left">Total Halls:</div>
                   <div className="col-sm-6 text-left">{item.numberOfHalls}</div>
                   </div></li>
                   <li key={'2'}><div className="row">
                   <div className="col-sm-6 text-left">Total Capacity:</div>
                   <div className="col-sm-6 text-left">{item.totalCapacity}</div>
                   </div></li>
                   <li key={'3'}>
                   <div className="row">
                   <div className="col-sm-6 text-left">Price from</div>
                   <div className="col-sm-6 text-left">{item.price}</div>
                   </div></li>
                       <li>
                       <div className="row"> 
                        <div className="col-md-12">
                        <Link to={`/vendor/${item.id}`} className="btn btn-success">View Vendor</Link></div>
                       

                        
                        </div>
                 
</li>
               </ul>
              
               </div>

           </div>
           </div>
           </div>
           
       ))}
       </section>
       <footer>
       <div className="row">
           <nav aria-label="Page navigation example mr-auto">
           <ul className="pagination">
               <li className="page-item">
               <a className="page-link" href="#" aria-label="Previous">
                   <span aria-hidden="true">&laquo;</span>
               </a>
               </li>
               <li className="page-item"><a className="page-link" href="#">1</a></li>
               <li className="page-item"><a className="page-link" href="#">2</a></li>
               <li className="page-item"><a className="page-link" href="#">3</a></li>
               <li className="page-item">
               <a className="page-link" href="#" aria-label="Next">
                   <span aria-hidden="true">&raquo;</span>
               </a>
               </li>
           </ul>
           </nav>
           </div>
           </footer>       
   </div>

       </Router>
       
    );
  }
}

export default App;
