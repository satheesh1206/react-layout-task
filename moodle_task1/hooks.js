import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './hooks.css'
import { Menu } from "../menu";


export function Incre(){
    const [Count,setCount]=useState(1)
    

   return(
    <>
    <div className="text-center p-5 colo id=Inc">
    <h1 className="mt-5">{Count}</h1>
    
    <button className="mt-5  bg-primary pt-2 px-5 mx-5 bor"onClick={()=>{setCount(Count+1)}}>Add</button>
    <button className="mt-5 bg-warning pt-2 px-5 mx-5 bor"onClick={()=>{setCount(Count-1)}}>Sub</button>
    <button className="mt-5 bg-danger pt-2 px-5 mx-5 bor"onClick={()=>{setCount(Count*0)}}>Reset</button>
    </div>

    </>
   );
}