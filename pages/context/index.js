import React, { createContext } from "react";
import Comp1 from "./Comp1";

const FirstName = createContext();
const MidName = createContext();
const LastName = createContext();


const Index = () => {
    return (
        <>

            <FirstName.Provider value={"Raja"}>

                <MidName.Provider value={"Kumar"}>

                    <LastName.Provider value={"Birla"}>

                        <Comp1 />

                    </LastName.Provider>

                </MidName.Provider>

            </FirstName.Provider>
        </>
    )
}
export default Index;
export { FirstName, LastName, MidName };