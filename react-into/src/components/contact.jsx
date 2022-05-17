import { useState } from "react"
import "./module.css"
export const Contact =()=>{
    const con=[{name:"vikash",email:"aba@gmail.com",mobile:"9852541056",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEjKTYpRfwCdVKg7agc7QG2Gx9rkjsYc7Ig&usqp=CAU"},
    {name:"vishal",email:"adfdfa@gmail.com",mobile:"98521056",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQir3uMERkl1Xjuznyem7QJBGqqj3ldh_yZ1S-ZQl7CXUiptV_g8hSsVJZzWbI9YlXchZo&usqp=CAU"},
    {name:"akash",email:"akasha@gmail.com",mobile:"995741056",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3hwxDFCBZsEQzhAVA9njNMXYeMcW73h5fw&usqp=CAU"},
    {name:"moumi",email:"moumi@gmail.com",mobile:"955741056",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AFhihIhHsnp_59OSGqLyOJfyT2ZUlWUwRg&usqp=CAU"}]
  const[show,setShow]=useState()
  const [count,setCount]=useState(0)
  const[index,setindex]=useState()
  
    return (
             <div className="App">
                {con.map((e,i)=>(
                    <div className="concard" onClick={(i)=>{
                       if(index!=i){
                        setShow(e.mobile)
                        setCount(count+1)
                       }
                       if(count==0){
                        setShow(e.mobile)
                        setCount(count+1)
                       }
                       else{
                           setShow(null)
                           setCount(0)
                           setindex(i)
                          
                       }
                        
                      
                    }} key={i}>
                  <div className="smallcard"> <div><img src={e.img} alt="" /></div>
                  <div><p>{e.name}</p></div>
                  </div>
                  
                      <h4>{e.email}</h4>
                    
                      {show==`${e.mobile}`?<div className="mobile"><h4>mobile no:{e.mobile}</h4></div>:null}
                   
                     </div>
                ))}
               
                   
            
             </div>
    )
}