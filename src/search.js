import React from 'react' ;
import IntegrationReactSelect from './search-field.js' 


export class Search extends React.Component {
    state = { 
        searchCity : '' 
    }

    render() {
        return (

        <section className="jumbotron text-center">
         <div className="container">
        <h1 className="jumbotron-heading text-left">Album example</h1>
        <form>
            <div className="form-control">
             <IntegrationReactSelect onChange={this.props.handelFilter}/>
            </div>
        </form>
        
        </div>
        </section> 
        )
    }

}

export default Search;
