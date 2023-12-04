import React from "react";
import Table from "../childComponent/table";
import styles from "./parent.module.css";

export default function Parent() {
    return (
        <>
            <div className={styles.style-div}>
                <Table num={3} />
                <Table num={5} />
                
            </div>
            {/* <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <Table num={9} />
                <Table num={7} />
                <Table num={10} />
            </div> */}
        </>
    )
}




// style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}