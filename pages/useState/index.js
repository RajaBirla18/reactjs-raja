import React, { useState } from "react";

function Index(){
    const [count, setCount] = useState(0);

    const handleDec = () =>{
        setCount( count => count-1);
    }
    const handleInc = () =>{
        setCount(count => count+1);
    }

    return(
        <>
        <center>
        <button onClick={handleDec}>-</button>
        <span>{count}</span>
        <button onClick={handleInc}>+</button>
        </center>
        </>
    )
}
export default Index;
 
// function UseState(){
//     const [name, setName] = useState("Raja");
//     const [age, setAge] = useState(18);


//     const handleClick = () => {
//         setName("raja");
//     }
//     return (
//         <>
//         <center>
//         <div>{name}</div>
//         <button onClick={handleClick}>Click</button>
//         </center>
//         </>
//     )
// }

// export default UseState;