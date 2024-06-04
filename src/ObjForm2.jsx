


import React, { useState } from 'react'

export default function ObjForm2() {

  const [obj, setobj] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  })


  const handlechange = (e) => {
    const { name, value } = e.target;
    setobj({
      ...obj,
      [name]: value
    });
  };


  const handleform = (e) => {
    e.preventDefault()
    console.log(obj);
    console.log(obj.name);
    console.log(obj.username);
    console.log(obj.password);
    console.log(obj.gender);
    setobj({
      name: "",
      username: "",
      password: "",
      gender: "",
    })
  }

  return (
    <>
      <form onSubmit={handleform}>
        <input type="text" placeholder='Enter your Name' name="name" value={obj.name} onChange={handlechange} />
        <input type="text" placeholder="Enter Username" name="username" value={obj.username} onChange={handlechange} />
        <br />
        <input type="password" placeholder="Enter your password" name="password" value={obj.password} onChange={handlechange} />

        <br />
        <input type="radio" name="gender" id="male" value="male" onChange={handlechange} />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" id="female" value="female" onChange={handlechange} />
        <label htmlFor="female">Female</label>      <br />



        <button>Submit</button>
      </form>

    </>
  )
}






// export default function ObjForm2() {

//   const [obj1, setobj] = useState({
//     name: "",
//     Email: "",

//   })


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setobj({
//       ...obj1,
//       [name]: value
//     });
//   };

//   const handleform = (e) => {
//     e.preventDefault()
//     console.log(obj1);
//     console.log(obj1.name);
//     console.log(obj1.Email);
//     setobj({
//       name: "",
//       Email: "",
//     })
//   }

//   return (
//     <><form onSubmit={handleform}>
//       <input type="text" name="name" value={obj1.name} onChange={handleChange} />
//       <input type="text" name="Email" value={obj1.Email} onChange={handleChange} />
//       <button>submit</button>
//     </form>

//     </>
//   )
// }


  