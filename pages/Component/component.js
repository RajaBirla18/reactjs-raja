import React from "react";


export default function Component(props){
    return(
        <>
        <h3 style={{color : "green"}}> Hello {props.name} {props.last}  !! How are you</h3>
        {props.children}
        </>
    )
}

// style={{color : "red"}}