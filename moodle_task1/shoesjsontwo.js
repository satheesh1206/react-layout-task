import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'


export function Shoesjsontwo(){
    const[boost,setBoost]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setBoost(json))

    })
return(
    <>
       <div className="coninter-fluid">
            <div className="row">
                {
                    boost.map((value,index)=>(
                     <>

                     <div className="card col-lg-3">
                           <img src={value.image}/>
                        <div className="card-body">
                            <h1>{value.brand}</h1>
                            <p>{value.price}</p>
                            <p>{value.rating.rate}</p>
                            <p>{value.description}</p>

                        </div>

                     </div>
                     </>   
                    ))
                }

            </div>
        </div>
    
    </>
);
}