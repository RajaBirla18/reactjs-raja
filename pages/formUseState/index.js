// import React, { useState } from "react";

// function Form(){
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const handleInput = (e) => {
//         const {name, value} = e.target;

//         setForm({
//             ...form,
//             [name]: value
//         })
//     };

//     // const handleEmail = (e) => {
//     //     form.email = e.target.value;
//     // }

//     // const handlePassword = (e) => {
//     //     form.password = e.target.value;
//     // }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setForm("")
//         console.log("=====e====", form);
//     }; 


//     return(
//         <>

//         <center>
//             <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name :- </label>

//                 <input type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleInput}
//                 style={{margin:"10px", padding:"5px"}}/>

//             </div>

//                 <div>
//                 <label>Email :- </label>

//                 <input type="text"
//                 name="email"
//                 value={form.email}
//                 onChange={handleInput}
//                 style={{margin:"10px", padding:"5px"}}/>

//             </div>

//             <div>
//                 <label className="mb-4">Password :-</label>
//                 <input type="password"
//                  name="password" 
//                  value={form.password} 
//                  onChange={handleInput}
//                  style={{margin:"10px", padding:"5px"}} />
//             </div>

//             <div>
//                 <label></label>
//                 <button type="submit">Login</button>
//             </div>

//             </form>
//         </center>
//         </>
//     )
// }

// export default Form;



// import React, { useState } from "react";

// function NewForm() {

//   const [name, setName] = useState();

//   const [age, setAge] = useState(20);

//   const ageAsNumber = Number(age);


//   return (
//     <>
//       <lable>First Name:-</lable>
//       <input type="text" value={name}
//         onChange={(e) => { setName(e.target.value) }}
//       />


//       <label>Age:-</label>
//       <input type="number" value={age}
//         onChange={(e) => { setAge(e.target.value) }}
//       />

//       <button onClick={() => setAge(ageAsNumber + 10)}>Age 10 year</button>

//       {name !== '' &&
//         <p>Your name is {name}.</p>
//       }
//       {ageAsNumber > 0 &&
//         <p>Your age is {ageAsNumber}.</p>
//       }

//     </>
//   )
// }

// export default NewForm;




// import React, { useState } from "react";


// function Time(){

//     let time = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(time);

//     const UpDateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }

//     setInterval(UpDateTime,1000);
//     return(
//         <>
//         <center><h1>{ctime}</h1></center>
//         </>
//     )
// }

// export default Time;

// import React, { useState } from "react";

// function Events(){

//     const purple = "#8e44ad";

//     const [bg, setBg] = useState(purple);

//     const [name, setName] = useState('Click me');

//     const bgChange = () => {
//         setBg('red');
//         setName('You Changed');
//     }

//     const bgBack = () => {
//         setBg('black');
//         setName('Again Changed');
//     }

//     return(
//         <>
//         <center>
//         <div style={{backgroundColor:bg}}>
//             <button onMouseEnter={bgChange} onMouseOut={bgBack}><h2>{name}</h2></button>
//         </div>
//         </center>
//         </>
//     )
// }

// export default Events;





// import React, { use, useState } from "react";

// function ThapaForm() {

//     const [fullNameame, setFullName] = useState({
//         fname: '',
//         lname: '',
//     });



//     const handleInput = (e) => {
//         console.log(e.target.value);

//         console.log(e.target.name);

//         const value = e.target.value;

//         const name = e.target.name;

//         setFullName((preValue) => {
//             console.log(preValue);

//             if (name === "fname") {
//                 return {
//                     fname: value,
//                     lname: preValue.lname
//                 };
//             } else if (name === "lname") {
//                 return {
//                     fname: preValue.fname,
//                     lname: value
//                 };
//             }
//         })
//     };



//     const handleSubmit = (e) => {

//         e.preventDefault();
//         alert('form submitted');

//     };

//     return (
//         <>
//             <center>
//                 <form onSubmit={handleSubmit}>

//                     <h1>Hello  {fullNameame.fname} {fullNameame.lname}</h1>

//                     <input
//                         type="text"
//                         placeholder="Enter your name"
//                         onChange={handleInput}
//                         name="fname"
//                         value={fullNameame.fname} 
//                     />

//                     <br />
//                     <br />

//                     <input
//                         type="text"
//                         placeholder="Enter your last name"
//                         onChange={handleInput}
//                         name="lname"
//                         value={fullNameame.lname}
//                     />

//                     <button type="submit" style={{ margin: "9px" }}>Click here</button>
//                 </form>
//             </center>

//         </>
//     )
// }

// export default ThapaForm;




// const [lastName, setLastName] = useState();

// const [fullName, setFullName] = useState();

// const [lastNameNew, setLastNameNew] = useState();


// const handleInputTwo = (e) => {

//     setLastName(e.target.value);
// };


// setFullName(name);
// setLastNameNew(lastName)
// setName(e.target.value);



import React, { use, useRef, useState } from "react";
import styles from "./style.module.css";
const ArrayData = () => {

    const [data, setData] = useState([]);
    const inputRef = useRef(null);

    return (

        <div className="todo">

            <input ref={inputRef} type="text" />

            <button onClick={() => { setData([...data, inputRef.current.value]) }  }>submit</button>

            {data.map((item, index) => {
                return (
                    <>
                        <h2>{item}</h2>
                    </>
                )
            })}
            
        </div>
    )
}

export default ArrayData;
