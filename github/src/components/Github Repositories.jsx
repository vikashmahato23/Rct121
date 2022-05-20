import { useState,useEffect } from "react"
import "./git.css"
 export const Github=(prop)=>{
  
   const[data,setValue]=useState([])
 const[all,setall]=useState()
 console.log(data,"dfd")
  useEffect(()=>{
   getData()
  },[prop.text])
  const getData=async ()=>{
    try{
    
      let res= await fetch(`https://api.github.com/search/repositories?q=${prop.text}&page=1&per_page=2`);
      var data = await res.json();
      console.log(data)
      setValue(data.items)
      setall(data.total_count)
      
    }catch(err){
      console.log(err)
    }
  
  }
     return <div className="gitcon">
              <div className="gitrepo">
                <div className="namecon">
                  <div><h3>{all}  repository results</h3></div>
                  <div><button>sort</button></div>
                </div>
               {data.map((e,i)=>(
                 <div key={i} className="gitcard">
                   <div><p>{e.full_name}</p></div>
                       <p>{e.description}</p>
                 </div>
               ))}
              </div>
              <button>prev</button><button >next</button>
         </div>
 }

                   {/* <div><p>{e.full_name}</p></div>
                 </div> */}