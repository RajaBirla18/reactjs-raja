import React from "react";
import Component from "../Component/component";

export default function Header(){
    return(
        <>
        <Component name="Anshul" last="Agrawal">
        {/* <span style={{backgroundColor:"red"}}>Anshul is a good boy.</span> */}
        </Component>
        <Component name="Ranjeet" last ="Rathore" />
        <Component name="Yagyam" last ="Patidar"/>
        <Component name="Raja"/>
        
        </>
    )
}