import React, { useContext } from "react";
import { FirstName, LastName, MidName } from "./index";

const Comp3 = () => {
    
    const fname = useContext(FirstName);
    const mname = useContext(MidName);
    const lname = useContext(LastName);
    
    return (
        <>
            <h1>My name is {fname} {mname} {lname} </h1>
        </>
    )
}
export default Comp3;



{/* <h1>My name is raja birla</h1> */}
{/* <Comp4 /> */}
// import Comp4 from "./comp4";