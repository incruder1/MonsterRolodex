import React, {Component} from "react";  
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/searchbox/searchbox.component";
import './App.css';

 class App extends Component{
  constructor(){
    super();
    this.state={
       monsters:[],
       searchField:""
    }; 
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users => this.setState({monsters:users}));
    }
    handleChange=(e)=>{
        this.setState({searchField:e.target.value});
    }

  render(){
    const { monsters, searchField }=this.state;
const filterMonster=monsters.filter(monster=>
monster.name.toLowerCase().includes(searchField.toLowerCase())
);
    return(
      
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
      placeholder="Search Monsters"
      handleChange= {this.handleChange}  
          />
      <CardList monsters={filterMonster} />
       
    </div>
    )
  }
 
 }
export default App;
