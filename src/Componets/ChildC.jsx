
import { useContext } from "react"
import { data, data1 } from "./PropDriling"


export default function ChildC() {
    const name = useContext(data);
    const movie = useContext(data1);
    
    return (
        <>

            <p>{name}</p>
            <p>{movie}</p>
        </>
    )
}
