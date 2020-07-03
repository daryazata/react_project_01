import React from 'react'


const Validation = (props)=>{

    let length
    if(props.length>=5){
        length="Input is long enough"
    }else{
        length="Input is too short"
    }
    return(

        <div>
            {length}
        </div>

    )

}

export default Validation