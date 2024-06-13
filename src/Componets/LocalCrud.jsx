import { useEffect, useState } from "react"


export default function LocalCrud() {

    const [iteam, setitem] = useState(() => {
        const storeData = localStorage.getItem("Data");
        return storeData ? JSON.parse(storeData) : [];

    })


    const [inputvalue, setInputvalue] = useState({
        name: "",
        password: ""
    });

    const handleinput = (e) => {
        const { name, value } = e.target;
        setInputvalue({ ...inputvalue, [name]: value })

    }

    const handlAddData = (e) => {
        e.preventDefault();

        if (inputvalue.name === "") {
            alert("please enter a name")
        } else if (inputvalue.name.length < 2) {
            alert("please Enter more then 2 characters")
        } else if (inputvalue.password === "") {
            alert("please enter a password")
        } else if (inputvalue.password.length < 8) {
            alert("please Enter the password More then 4 character")
        } else {
            setitem([...iteam, inputvalue])
            console.log(inputvalue);
        }
    }

    useEffect(() => {
        localStorage.setItem("Data", JSON.stringify(iteam))
    }, [iteam])

    return (
        <>
            <form action="">

                <input type="text" placeholder="Enter Name" name="name" value={inputvalue.name} onChange={handleinput} /><br /><br />
                <input type="password" placeholder="Enter password" name="password" value={inputvalue.password} onChange={handleinput} /><br /><br />

                <button onClick={handlAddData}>Add Data</button>
            </form>

            {
                <table border={2} cellSpacing={10} >
                    <thead >
                        <tr>
                            <th>SR NO</th>
                            <th>Name</th>
                            <th>Password</th>

                        </tr>
                    </thead>

                    <tbody>
                        {iteam.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.password}</td>
                                </tr>
                            );
                        })}

                    </tbody>


                </table>







            }
        </>
    )
}
