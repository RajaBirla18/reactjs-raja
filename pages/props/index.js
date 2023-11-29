import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


export default function Props() {
    let foodItem = ["Daal", "Ghee", "Vegetable", "milk", "curd"]

    return (
        <>
            <h1>Healthy Food</h1>
            <ListGroup>
            {foodItem.map((item) => {
                    <li key={item}>
                        {item}
                    </li>
                })}
            </ListGroup>
            <ul>
               
            </ul>


        </>
    )
}