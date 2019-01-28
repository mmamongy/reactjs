import React from 'react' ;
import { BrowserRouter as Router, Route, Link, Switch , browserHistory} from "react-router-dom";
import Vendor from './vendor';

class VendorsList extends React.Component {

    state = {
        isLoading: true,
        error: null
      }

   
    
     // <li key={item.id } >{item.name}</li>
    render() {
        return ( 
        <div className="row">
       
            
            { this.props.venues.map((item,index) =>(
               <div className="col-md-4">
                <div className="card"  key={item.id }>
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
                             <span><Link to={`/vendor/${item.id}`} className="btn btn-success" component={Vendor}>View Vendor</Link></span>
                             <Route path="/:id" component={Vendor}/>

                             
                             </div>
                      
  </li>
                    </ul>
                   
                    </div>

                </div>
                </div>
                </div>
                
            ))}
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
               
        </div>
       
        ) 
    }


}

export default VendorsList ;