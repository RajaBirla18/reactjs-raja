import React from "react";
import { FirstName, LastName, MidName } from "./index";

const Comp4 = () => {
    return (
        <>

            <FirstName.Consumer>
                {((fName) => {
                    return (
                        <MidName.Consumer>
                            {(mName) => {
                                return (
                                    <LastName.Consumer>
                                        {(lName) => {
                                            return (
                                                <>
                                                    <h1>My name is {fName} {mName} {lName}</h1>
                                                </>
                                            )
                                        }}
                                    </LastName.Consumer>
                                )
                            }}
                        </MidName.Consumer>
                    )
                })}
            </FirstName.Consumer>

        </>
    )
}
export default Comp4;

{/* <LastName.Consumer>
    {(lname) => {
        return
    }}
</LastName.Consumer> */}
