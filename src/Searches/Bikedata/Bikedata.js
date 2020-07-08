import React, {Component} from 'react';
import axios from '../../axios-orders';

class Bikedata extends Component {
  state = {
    users: []
  };
  
  componentDidMount() {
    axios.get('/user.json').then (response => {
      console.log(response.data);
      const fetchedResults = [];
      for(let key in response.data){
        fetchedResults.push(
          {
            ...response.data[key],
            id: key
          }
        )
      }
      this.setState({users: fetchedResults})
    })
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.roll}</h1>
          </div>
        })}
      </div>
    )
  }
}

export default Bikedata;