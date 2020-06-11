import React from 'react'


//ES6 function convention

const person = (propss) => {


    return (  //() when multiple lines

        <div>

          <p>Im {propss.name} and Im {propss.age} years old</p>
          <p>{propss.children}</p> {/* children accesses element between <componenttag> children </componenttag>(text or html element or antoher component ) */}

        </div>
    )
}

export default person