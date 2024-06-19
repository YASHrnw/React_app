

import { useState } from "react";

export default function Function_Component() {

    const [data, setdata] = useState("yash")

    console.warn("___________");

    function updateData() {
        setdata("YASH PANCHAL")
    }

    return (
        <>
            <h3>{data}</h3>
            <button onClick={updateData}>UpDate Data</button>
        </>
    )
}


