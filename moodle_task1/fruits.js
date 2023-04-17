import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './fruits.css'
import mango from './mango.jpg'
import banana from './banana.jpg'
import { Menu } from "../menu";

export function Fruits(){
    const [add,setAdd]=useState(0)
    const [pluse,setPluse]=useState(0)


    return(
        <>
        <div className="container col2 id=Fru">
            <div className="row ">
                <div className="col-lg-2"></div>
                
                    <div className="col-lg-8 p-5 row">
                        <h1>Satheesh ate <span className="sp">{add}</span> mangoes <span className="sp">{pluse}</span> bananas</h1>
                        <div className="row">
                            <div className="col-lg-6 p-3">
                                
                                    <img className="bt" src={mango}/><br/>
                                    <div className="d-flex flex-row justify-content-around">
                                    <button className="pt-2 my-1 bt bg-danger" onClick={()=>{setAdd(add+1)}}>Eat mangoe</button>
                                    <button className="pt-2 my-1 bt bg-danger" onClick={()=>{setAdd(add*0)}}>Reset</button>
                                </div>    
                            </div>
                            <div className="col-lg-6 p-3">
                                    <img className="bt" src={banana}/><br/>
                                    <div className="d-flex flex-row- justify-content-around">
                                        <button className="pt-2 my-1 bt bg-warning" onClick={()=>{setPluse(pluse+1)}}>Eat banana</button>
                                        <button className="pt-2 my-1 bt bg-warning" onClick={()=>{setPluse(pluse*0)}}>Reset</button>
                                    </div>
                            </div>
                        </div>
                        </div>
                    <div className="col-lg-2"></div>
                </div>
           </div>       
        </>
    );
}
