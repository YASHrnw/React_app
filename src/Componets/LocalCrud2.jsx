import React from 'react'
import { useState } from 'react'

export default function LocalCrud2() {


    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    });

    const handleinput = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });


    };


    const handleAdd = (e) => {
        e.preventDefault();
        console.log(inputValue);

    }

    return (
        <>
            <form action="">
                <input type="text" name='name' placeholder='Enter your Name' value={inputValue.name} onChange={handleinput} /><br />
                <input type="text" name='password' placeholder='Enter your password' value={inputValue.password} onChange={handleinput} /><br />
                <button onClick={handleAdd}>Add</button>

            </form>
        </>
    )
}


