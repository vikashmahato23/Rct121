import { useState, useEffect } from "react";

export const ShowStudents = () => {
 const [show, setshow] = useState([]);
 const [sec,setSec]   =useState("");
const [oreder,setOrder]=useState("");

//  const [sec,setSec=useState("");


   useEffect(() => {
    //  setTodos(todos)
    fetch("http://localhost:8080/students")
      .then((d) => d.json())

      .then((data) => {
        // console.log("data", data)
        setshow(data)
      })
  },[])
console.log(show)
 
  function sort(){
     console.log(sec.length,oreder)
      // const sort=[...show]
     if(oreder=="asc"&&sec=="age"){
   
      show.sort(function (a, b) {
        return a.age - b.age;
      });
     setshow([...show])
     }
    else if(oreder=="asc"&&sec=="tenth_score"){
   
      show.sort(function (a, b) {
        return a.tenth_score - b.tenth_score;
      });
     setshow([...show])
     }
    else if(oreder=="asc"&&sec=="twelth_score"){
   
      show.sort(function (a, b) {
        return a.twelth_score - b.twelth_score;
      });
     setshow([...show])
     }
     
  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            onChange={(e) => {
              setSec(e.target.value)
            }}
            className="sortby"
          >
            <option >choose</option>
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            onChange={(e) => {
            setOrder(e.target.value)
            }}
            className="sortorder"
          >
                <option >choose</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={sort} >sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
  <tbody className="tbody">
     
             {show.map((e)=> (
            <tr  key={e.id} className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name" >{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender" >{e.gender}</td>
              <td className="age">{e.age}</td>
              <td className="tenth_score">{e.tenth_score}</td>
              <td className="twelth_score">{e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
         
         ))}
        </tbody>
      </table>
   
    
       
    </div>
  );
};