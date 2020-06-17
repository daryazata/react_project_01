import React from 'react'
import './Person.css'
import Radium, {StyleRoot} from 'radium'

//ES6 function convention
const person = (propss) => {

  const style ={
    '@media (min-width: 500px)':{
      width: '450px'
    }

  }

    return (  //() when multiple lines
        <div className="Person" style={style}>
          <p onClick={propss.click} > Im {propss.name} and Im {propss.age} years old</p>
          <p>{propss.children}</p> {/* children accesses element between <componenttag> children </componenttag>(text or html element or antoher component ) */}

          <input type="text" onChange={propss.changed} value={propss.name}/>
        </div>
    )
}

export default Radium(person)