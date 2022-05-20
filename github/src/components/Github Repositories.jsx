import { useState,useEffect } from "react"

 export const Github=(prop)=>{
  
   const[value,setValue]=useState({prop})

   
  useEffect(()=>{
   getData()
  },[prop.text])
  const getData=async ()=>{
    try{
    
      let res= await fetch(`https://api.github.com/search/repositories?q=${prop.text}&page=1&per_page=1`);
      var data = await res.json();
      console.log(data,"dfdf")
    }catch(err){
      console.log(err)
    }
  
  }
     return <div>
           
      
         </div>
 }