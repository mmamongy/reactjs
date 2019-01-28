import React from 'react' ;
import { Link } from "react-router-dom"; 



class Vendor extends React.Component {
    state = {
    hello: null
    }
    componentDidMount () {
        const { handle } = this.props.match.params
    
        fetch(`https://api.twitter.com/user/${handle}`)
          .then((user) => {
            this.setState(() => ({ user }))
          })
      }
   
    render() {
        return ( 
        <div className="row">
        <h1> hello </h1> </div>
        ) 
    }
}


export default Vendor ;