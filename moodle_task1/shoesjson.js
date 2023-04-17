import React ,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './shoesjson.css'
import StarRatings from 'react-star-ratings';

export function Shoesjson(){
    
    const[boost,setBoost]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/firstclass/data.json")
        .then(add=>add.json())
        .then(hor=>setBoost(hor))
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
                            <StarRatings
                                rating={value.star_rating}
                                starDimension="40px"
                                starSpacing="15px"
                                starRatedColor="blue"
                            />
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




