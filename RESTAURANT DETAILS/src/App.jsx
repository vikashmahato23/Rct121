import { AddStudent } from "./components/AddStudents";
import { ShowStudents } from "./components/ShowStudents";
import{useState,useEffect} from "react"
function App() {
  const[studentshow,setstudent]=useState(false)
  return (
    <div className="App">
 
                      {studentshow?<AddStudent/>:null}
                      
                      <button className="togglebtn"  onClick={()=>{
                        setstudent(!studentshow);
                      }}>{studentshow?"Go to":" Add"} Student</button>
                      {studentshow? null:<ShowStudents/>}
                      {/* {show?<Todos/>:null}
                      <button onClick={()=>{
                       setShow(!show);
                      }}>{show?"Hide":"show"} Addstudent</button> */}
      {/* <AddStudent/> */}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
     
    </div>
  );
}

export default App;
