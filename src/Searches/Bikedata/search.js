import React, { Component } from 'react';
import Information from './Bikedata';
import classes from './search.module.css';
import Aux from '../../HOC/Auxiliary';

class Search extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){

    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li>
            <span className= {classes.data}>{data.name}</span>
            <span className= {classes.data}>{data.age}</span>
            <span className= {classes.data}>{data.country}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <Aux>
      <div className={classes.wrapper} >
         <input className={classes.input} type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
      </div>
      <div>
        {items}
      </div>
      </Aux>
    )
  }
}

export default Search;