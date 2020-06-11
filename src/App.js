import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

//function App()
class App extends Component
{
  state ={  //  state is a JS Object that, its used to manage component internal data

    persons:[

        {name:"Marini", age:"30"},
        {name:"Dash", age:"31"}, 
        {name:"Serg", age:"36"}

    ]
  }

  switchNameHandler= ()=>  {

      // console.log('Was clicked!')
     // DONT DO THIS this.state.persons[0].name="Marina"
     this.setState({   

      persons:[

        {name:"Max", age:"37"},
        {name:"Dash", age:"30"}, 
        {name:"Serg", age:"40"}

    ]

     })

  }

// state changes lead to DOM updating / rerendering 

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Hi, im starting programming with React!</h1>
        

        {/* !!  dont add () after function , it will execute function when rendering the DOM 
        if wanting to execute it on click dont put () behind the function- > 
        in that wy we use the reference  */}
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}> My hobby is dancing </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}
  
  // this code is logically the same as the code below, 
  // html code gets compiled to this code  
  // and its NOT a HTML code, its JSX !! code that get compiled to this React.createE ..
  //return React.createElement('div',{className:"App"}, React.createElement('h1',null, 'Hi, im starting programming with React!'))


}

export default App;
