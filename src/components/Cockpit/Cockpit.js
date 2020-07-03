import React from 'react'
import './Cockpit.css'


const cockpit=(props)=>{
console.log(props)

    let classes =[]

    if(props.persons.length <= 2){
      
      classes.push('red')  // classes = ['red]
    }
    if(props.persons.length <= 1){

      classes.push('bold') // classes = ['red', 'bold']
    }
    
   let btnClass = 'Cockpit button'
   if(props.showPersons){
      
    btnClass= 'Red'
   }
    

    return(

        <div className="Cockpit">
        <h1>Hi, Im a React App!</h1>
        <p className={classes.join(' ')}>This is really working</p>
           {/* !!  dont add () after function , it will execute function when rendering the DOM 
        if wanting to execute it on click dont put () behind the function- > 
        in that wy we use the reference  */}
        {/* <button style={style} onClick={ ()=>  this.switchNameHandler("DaryA")}>Switch name</button>  */} {/* this can be unefficient, if overusing! use bind */}

        <button className={btnClass } onClick={props.tooglePersonHandler}>Toggle Persons</button>
        {/* replce this.state with personsState in func*/}
        
        
        
        </div>
    )
}

export default cockpit