import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Counter() {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    function handleClick() {
        setCount(count + 1);
    }

    function isEvenOdd() {
        (count % 2 == 0) ? "Even" : "Odd";
    }

    function handleOddEven() {
        setShow(!show);
    }

    return (
        <>

            <span style={{ textAlign: "center", padding: "10px", margin: "10px" }}>
                <p> counter val : {count}</p>
                {show &&
                    (
                        <p> Is Number ? :- {isEvenOdd()}</p>
                    )}
            </span>


            <div style={{ textAlign: "center", padding: "20px", margin: "10px" }}>

                <Button onClick={handleClick} style={{ margin: "10px" }}>Click Me : {count}</Button>

                <Button onClick={handleOddEven} > {show ? "Hide" : "Show"}</Button>
            </div>
        </>
    )
}



//  {/* <Button onClick={() => {
//     handleClick();
//     handleClick();
//     handleClick();
//     handleClick();
// }}>Click Me : {count}</Button> */}