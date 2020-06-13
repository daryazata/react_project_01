import React from 'react'
import './Person.css'

//ES6 function convention
const person = (propss) => {

    return (  //() when multiple lines
        <div className="Person">
          <p onClick={propss.click} > Im {propss.name} and Im {propss.age} years old</p>
          <p>{propss.children}</p> {/* children accesses element between <componenttag> children </componenttag>(text or html element or antoher component ) */}

          <input type="text" onChange={propss.changed} value={propss.name}/>
        </div>
    )
}

export default person