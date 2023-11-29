import React from "react";
export default function Table(props){
    const { num } = props;
    const table = [];
    for(let i=1; i<=10; i++) {
        table.push(
            <tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black", textAlign: "center"}}> {num} </td>
                <td style={{border:"1px solid black", textAlign: "center"}}> * </td>
                <td style={{border:"1px solid black", textAlign: "center"}}> {i}  </td>
                <td style={{border:"1px solid black", textAlign: "center"}}> =  </td>
                <td style={{border:"1px solid black", textAlign: "center"}}> {num*i} </td>
            </tr>
        );
    }
        
    return(
        <>
            <table style={{border:"1px solid black", margin:"45px"}}>
                <tbody>
                    <tr style={{border:"1px solid black"}}>
                        <td style={{border:"1px solid black", textAlign: "center"}}> Number </td>
                        <td style={{border:"1px solid black", textAlign: "center"}}>  </td>
                        <td style={{border:"1px solid black", textAlign: "center"}}> Multipliee </td>
                        <td style={{border:"1px solid black", textAlign: "center"}}>  </td>
                        <td style={{border:"1px solid black", textAlign: "center"}}> Result </td>
                    </tr>
                    {table}
                </tbody>
            </table>
        </> 
    )
}