import React, { useEffect, useState } from 'react'

export default function BT_Crude() {

    const [iteam, setItems] = useState([])


    const [inputvalue, setInputvalue] = useState({
        username: "",
        password: ""
    })



    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputvalue({ ...inputvalue, [name]: value })

    }





    const handelData = (e) => {
        e.preventDefault();

        if (inputvalue.username === "") {
            alert("please enter a username")
        } else if (inputvalue.username.length < 2) {
            alert("please Enter more then 2 characters")
        } else if (inputvalue.password === "") {
            alert("please enter a password")
        } else if (inputvalue.password.length < 8) {
            alert("please Enter the password More then 7 characters")
        } else {
            setItems([...iteam, inputvalue])
            console.log(inputvalue);
        }

    }




    return (
        <>
            <form >
                <div className="mb-3"  >
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        UserName
                    </label>
                    <input
                        type="text"
                        name='username'
                        value={inputvalue.username}
                        onChange={handleInput}

                        className="form-control"


                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        value={inputvalue.password}
                        onChange={handleInput}

                        className="form-control"

                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handelData}>
                    Submit
                </button>
            </form>
        </>
    )

}