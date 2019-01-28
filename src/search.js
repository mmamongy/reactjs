import React from 'react' ;
import Select from 'react-select';



const options = [
    { value: 'Islamabad', label: 'Islamabad' },
    { value: 'Stockholm', label: 'Stockholm' },
    { value: 'Cairo', label: 'Cairo' }
  ];

export class Search extends React.Component {
    state = { 
        searchCity : '' , 
        selectedOption: ''
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.onChange(selectedOption);
        console.log(`Option selected:`, selectedOption);
      }

    render() {
        const { selectedOption } = this.state;
        return (
        <section className="jumbotron text-center">
         <div className="container">
        <h1 className="jumbotron-heading text-left">Album example</h1>

        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> 
        </div>
        </section> 
        )
    }

}

export default Search;
