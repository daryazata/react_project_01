import React, { Component } from 'react';
import Person from './Person/Person'
import Validation from './assignmentComp/Validation'
import Char from './assignmentComp/Char'
import './App.css'
import Radium,{StyleRoot}  from 'radium'

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
  showPerson: false,
  outputLength:0,
  charOutputArr:[]
  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice() 
    //create a copy of an array, dont change the original array
    const persons = [...this.state.persons]  //spread operator => aquivalent to this.state.persons.slice() , more modern feature from JS ES6
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

lengthOutputHandler = (event) =>{

  console.log(event.target.value.length)
  let inputLength= event.target.value.length
  let input = event.target.value
  let inputArray = event.target.value.split('')
  console.log(input.split(''))
  this.setState({

    outputLength:inputLength,
    charOutputArr: inputArray
  })

  console.log(this.state.charOutputArr)
  
}

deleteCharOutput = (event, id) =>{

  console.log('delete id : ',id)
  let copy_charOutputArr = [...this.state.charOutputArr]
  copy_charOutputArr.splice(id,1)
  console.log(copy_charOutputArr)
  this.setState({

    charOutputArr:copy_charOutputArr
  })

}

// state changes lead to DOM updating / rerendering 

render(){ //if func no render
  //inline styles
  const style ={

    backgroundColor: 'green',
    color: "white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
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

   style.backgroundColor = "red";
   // using [] because ':hover' is a String
   style[':hover'] ={  
     backgroundColor: 'lightblue',
     color: 'black'
   }
  }

  let chars = (
   this.state.charOutputArr.map( (char, index)=>{

    return(
      <Char click={(event)=>{this.deleteCharOutput(event, index)}} key={index} char={char}/> 
    )
   })
    )


    let classes =[]

    if(this.state.persons.length <= 2){
      
      classes.push('red')  // classes = ['red]
    }
    if(this.state.persons.length <= 1){

      classes.push('bold') // classes = ['red', 'bold']
    }

  return (
    <StyleRoot>
    <div className="App">
      
      <h1>Hi, Im a React App!</h1>
      <p className={classes.join(' ')}>This is really working</p>
 
        {/* !!  dont add () after function , it will execute function when rendering the DOM 
        if wanting to execute it on click dont put () behind the function- > 
        in that wy we use the reference  */}
        {/* <button style={style} onClick={ ()=>  this.switchNameHandler("DaryA")}>Switch name</button>  */} {/* this can be unefficient, if overusing! use bind */}

        <button style={style} onClick={this.tooglePersonHandler}>Toggle Persons</button>
        {/* replce this.state with personsState in func*/}

     {persons}
         
        {/* assignment 2 */}

        <input type="text" value={this.state.charOutputArr.join('')}  onChange={(event)=>{this.lengthOutputHandler(event)}} />
        <p>{this.state.outputLength}</p>
        <Validation length={this.state.outputLength}/>
        {chars}
    
    

    </div>
    </StyleRoot>
  );

}
  
  // this code is logically the same as the code below, 
  // html code gets compiled to this code  
  // and its NOT a HTML code, its JSX !! code that get compiled to this React.createE ..
  //return React.createElement('div',{className:"App"}, React.createElement('h1',null, 'Hi, im starting programming with React!'))


}

export default Radium(App); // higher order Component

