import { useEffect, useState } from "react"
import "./Square.css"
var arr=[[null,null,null],[null,null,null],[null,null,null]]

export const Board=()=>{
     
  const [board,setBoard] =useState(arr)
console.log(board)

  const[count,setCount] =useState(0);
  const[res,setRes] =useState();
  const[total,setTotal] =useState();
  

 useEffect(()=>{
      var count=0
      for(var i=0; i<3;i++){
           for(var j=0; j<3; j++){
                //horizontal
                if(board[i][j]=="x"&&board[i][j+1]=="x"&&board[i][j+2]=="x"){ 
                 setRes("X win")
                }
                else if(board[i][j]=="0"&&board[i][j+1]=="0"&&board[i][j+2]=="0"){
                 setRes("0 win")
                }
                //column
              else if(i==0&&board[i][j]=="x"&&board[i+1][j]=="x"&&board[i+2][j]=="x"){
               setRes("X win")
                }
           else if(i==0&&board[i][j]=="0"&&board[i+1][j]=="0"&&board[i+2][j]=="0"){
                 setRes("0 win")
                }
                //left vertical
                else if(i==0&&board[i][j]=="0"&&board[i+1][j+1]=="0"&&board[i+2][j+2]=="0"){
                              setRes("0 win")
                }
                else if(i==0&&board[i][j]=="x"&&board[i+1][j+1]=="x"&&board[i+2][j+2]=="x"){
                              setRes("X win")
                }
                //rigth vertical
                else if(i==0&&board[i][j+2]=="0"&&board[i+1][j+1]=="0"&&board[i+2][0]=="0"){
                              setRes("0 win")
               }
               else if(i==0&&board[i][j+2]=="x"&&board[i+1][j+1]=="x"&&board[i+2][0]=="x"){
                                                setRes("X win")
               }
                if(board[i][j]!=null){
                   count++;
                   if(count==9){
                        setTotal(count)
                   }
               }
              
           }
      }
 },[board])
 
function handle(e){
  if(res){

  }
  else{
for(var i=e; i==e; i++){
     if((e<=2)&&(count==0)&&(board[0][i]==null)){
         board[0][i]="x"
          setCount(1);

         
          setBoard([...board])
     }
     else if((e<=2)&&(count==1)&&(board[0][i]==null)){
          board[0][i]="0"
          setCount(0);
          setBoard([...board])
         
     }
     else if((e>2)&&(e<=5)&&(count==0)&&(board[1][i-3]==null)){
          board[1][i-3]="x"
          setCount(1);
          setBoard([...board])
         
     }
     else if((e>2)&&(e<=5)&&(count==1)&&(board[1][i-3]==null)){
          board[1][i-3]="0"
          setCount(0);
          setBoard([...board])
         
     }
     else if((e>5)&&(e<=8)&&(count==0)&&(board[2][i-6]==null)){
          board[2][i-6]="x"
          setCount(1);
          setBoard([...board])
          
     }
     else if((e>5)&&(e<=8)&&(count==1)&&(board[2][i-6]==null)){
          board[2][i-6]="0"
          setCount(0);
          setBoard([...board])
         
     }
}
  }

}

   return <div>
   <div className="boardApp">
       <div  className="square" onClick={()=>handle(0)}> <p>{board[0][0]}</p></div>
        <div  className="square" onClick={()=>handle(1)}> <p>{board[0][1]}</p></div>
        <div  className="square" onClick={()=>handle(2)}> <p>{board[0][2]}</p></div>
        <div  className="square" onClick={()=>handle(3)}> <p>{board[1][0]}</p></div>
        <div  className="square" onClick={()=>handle(4)}> <p>{board[1][1]}</p></div>
        <div  className="square" onClick={()=>handle(5)}> <p>{board[1][2]}</p></div>
        <div  className="square" onClick={()=>handle(6)}> <p>{board[2][0]}</p></div>
        <div  className="square" onClick={()=>handle(7)}> <p>{board[2][1]}</p></div>
       <div  className="square" onClick={()=>handle(8)}> <p>{board[2][2]}</p></div> 
     
   {(()=>{
    if(res=="X win"){
         return <div className="res"><p>X Win</p></div>
    }
    if(res=="0 win"){
         return <div className="res"><p>0 Win</p></div>
    }else if(total==9){
     return <div className="res"><p>Draw</p></div>
    }
   })()}
 
        
</div>
<button onClick={()=>{ 
   for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
             board[i][j]=null
        }
   }
        setBoard([...board])
        setTotal()
        setRes()
}}>RESET</button>
</div>
}

