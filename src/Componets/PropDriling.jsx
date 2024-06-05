import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext()

export default function PropDriling() {

    const name = "iron man";
    const movie = "caption marvel "

    return (

        <div>

            <data.Provider value={name}>
                <data1.Provider value={movie}>
                    <ChildA />

                </data1.Provider>
            </data.Provider>

        </div>

    );
}

export { data, data1 };