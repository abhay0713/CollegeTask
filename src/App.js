import React from "react";
import './App.css'
import college_data from "./college.data";
import CardList from "./components/card-list/card-list.component";

class App extends React.Component{
  constructor(){
    super()

    this.state ={
      colleges : college_data
    }
  }


  render(){
    return(
      <div className='App'>
        <CardList colleges={this.state.colleges} />
    </div>
    )
  }
}

export default App;
