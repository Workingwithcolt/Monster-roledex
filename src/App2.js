import React, {Component} from  'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[] 
    }
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => console.log(response.json))
      .then(users => console.log(users))
  }
  render(){
    return ( 
    <div className="App">
      {
        this.state.monsters.map(monster =><h1>{monsters.name}</h1>)
      }
  </div>)
  }
}
export default App;