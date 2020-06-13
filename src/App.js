import React, { Component } from 'react';
import Person from './Person/Person'


//function App()
class App extends Component
{
state ={  //  state is a JS Object that, its used to manage component internal data

  persons:[
      {id:"sdkjf",name:"Marini", age:"30"},
      {id:"sdkjfk",name:"Dash", age:"31"}, 
      {id:"skown",name:"Serg", age:"36"}
  ]
  ,
  otherState: "some other state",
  showPerson: false
  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice() 
    //create a copy of an array, dont change the original array
    const persons = [...this.state.persons]  //spread operator => aquivalent to slice() , more modern feature from JS ES6
    persons.splice(personIndex,1)
    this.setState(
      {persons : persons}
    )

  }

nameChangedHandler = (event, id) =>{

  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id
  })

  const person ={    //shouldnt mutate the original array, instead copy it to a new array -> spread operator
    ...this.state.persons[personIndex]  // here one object is updated with {}
   }     

   //alternative
  // const person = Object.assign({}, this.state.persons[personIndex])

  //updating name in the copied array, creating new coppy og whole array and update it
  person.name = event.target.value
  const persons = [...this.state.persons] // here spread operator with [], not {} because persons is an array (of object) , before one object was updated
  persons[personIndex] =  person

  this.setState(
  {  persons: persons}
  )



/*   this.setState({
    persons:[
   {name: "Max", age:"37"},
      {name: event.target.value, age:"30"}, 
      {name:"Serg", age:"40"}
  ]
  }
  ) */
}

tooglePersonHandler= () => {

  const togglePerson =this.state.showPerson
  this.setState({
    showPerson: !togglePerson

  })
}

// state changes lead to DOM updating / rerendering 

render(){ //if func no render
  //inline styles
  const style ={

    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null

  if(this.state.showPerson){

   persons = (

    this.state.persons.map((person , index)=>{

      return(
        <Person 
        key={person.id} 
        click={() => {this.deletePersonHandler(index)} } 
        name={person.name} 
        age={person.age}
        changed={(event)=>{this.nameChangedHandler(event, person.id)}}
        />
      )
    })

   )
  }


  return (
    <div className="App">
      
 
        {/* !!  dont add () after function , it will execute function when rendering the DOM 
        if wanting to execute it on click dont put () behind the function- > 
        in that wy we use the reference  */}
        {/* <button style={style} onClick={ ()=>  this.switchNameHandler("DaryA")}>Switch name</button>  */} {/* this can be unefficient, if overusing! use bind */}

        <button style={style} onClick={this.tooglePersonHandler}>Toggle Persons</button>
        {/* replce this.state with personsState in func*/}

     {persons}
         
    
    </div>
  );

}
  
  // this code is logically the same as the code below, 
  // html code gets compiled to this code  
  // and its NOT a HTML code, its JSX !! code that get compiled to this React.createE ..
  //return React.createElement('div',{className:"App"}, React.createElement('h1',null, 'Hi, im starting programming with React!'))


}

export default App;

