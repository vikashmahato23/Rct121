import { useState } from "react"
import "./Nav.css"
export const Nav=({prop})=>{
   console.log(prop)
    const [value,setValue]=useState("react")
    return  <div>
           <nav>
             <div><  img className="img" src="data:image/png;base64,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" alt="" /></div>
             <div className="input"><input type="text" onChange={(e)=>{
                  setValue(e.target.value)
                  prop(e.target.value)
             }} /> <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdUt5TqDjMIfZV-MTkEZOVd_qRvHR7UMsDA&usqp=CAU"  /></button></div>
           </nav>
            
        </div>
}