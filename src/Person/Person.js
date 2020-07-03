import React from 'react'
import './Person.css'
import styled from 'styled-components'

//ES6 function convention
// styled.div already returns a react component, dont need to write a function (propss) => {
const StyledDiv = styled.div`  

width: 60%;
margin:5px;
border: 1px solid #eee;
box-shadow: 0 2px 3 px #ccc;
padding: 16px;
text-align: right;     
cursor: pointer;
    &:hover {
      background-color: rgb(232, 241, 181);
      color: black
    }
@media(min-width: 500px){

    width: 450px

} 

`;

const person = (propss) => {

  const style ={
    '@media (min-width: 500px)':{
      width: '450px'
    }

  }

    return (  //() when multiple lines

        // <div className="Person" style={style}>
        <StyledDiv>
      
            <p onClick={propss.click} > Im {propss.name} and Im {propss.age} years old</p>
            <p>{propss.children}</p> {/* children accesses element between <componenttag> children </componenttag>(text or html element or antoher component ) */}

            <input type="text" onChange={propss.changed} value={propss.name}/>
          </StyledDiv>
        // </div>
    )
}

export default person