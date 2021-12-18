import React, {Component} from  'react';
import  {SearchBox}  from './Components/Search-box/Search_box.component';
import  {Cardlist}  from  './Components/card-list/card-list.component';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[] ,
      searchfield:''
    };
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }

  render(){
    const {monsters,searchfield } =this.state;//destructure 
    //above is the or way of the of abellow in short form
    // const monsters = this.state.monsters;
    // const searchfield = this.state.searchfield;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );
    return ( 
    <div className="App">
    <SearchBox 
    placeholder ='search monsters'
    handleChange ={e => {this.setState({ searchfield:e.target.value})}}
      />
      <Cardlist monsters = {filterdMonsters}/>
  </div>
  );
  }
}
export default App;