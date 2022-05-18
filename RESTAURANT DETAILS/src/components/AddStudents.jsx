import { useState,useEffect } from "react";

export  const AddStudent = () => {
  
  const [first,setFirst] =useState("")
  const [last,setLast] =useState("")
  const [email,setEmail] =useState("")
  const [branch,setBranch] =useState("")
  const [ten,setTen] =useState(0)
  const [twelth,setTwelth] =useState(0)
  const [age,setAge] =useState(0)
  const [gender,setGender] =useState("")
  const [data,setData]=useState([])
  console.log(data)
  useEffect(()=>{
    getData()
    
    },[])
  async function getData(){
    try {
      let response = await fetch("http://localhost:3000/students");
      let user = await response.json();
      setData(user)
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }

  }
 

 
    return (
      <form className="addstudent" 
      onSubmit={(event)=>{
        event.preventDefault()
        

const payload={
id:data.length+1,
first_name:first,
last_name:last,
email:email,
gender:gender,
age:age,
tenth_score:ten,
twelth_score:twelth,
preferred_branch:branch,

};
setData([...data,payload])
fetch("http://localhost:3000/students",{
method:"POST",
headers:{
  "content-type":"application/json"
},
body:JSON.stringify(payload)



})
      alert("sucessful")
       }}>
        <div>
          Firstname:{""}
          <input onChange={(e)=>{
          setFirst(e.target.value)
          }}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
          onChange={(e)=>{
            setLast(e.target.value)
            }}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
          onChange={(e)=>{
            setEmail(e.target.value)
            }}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
             onChange={(e)=>{
              setGender(e.target.value)
              }}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
            onChange={(e)=>{
              setGender(e.target.value)
              }}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
           onChange={(e)=>{
            setAge(e.target.value)
            }}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
           onChange={(e)=>{
            setTen(e.target.value)
            }}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
           onChange={(e)=>{
            setTwelth(e.target.value)
            }}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
             onChange={(e) => {
              setBranch(e.target.value)
            }}
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit"   />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };