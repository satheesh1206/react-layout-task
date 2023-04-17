import React from "react";
import './congrats_card.css'
import Photo from './profile.png'
import watch from './watch.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Menu } from "../menu";

export function Congrats(){
    return(
        <>
        <div className="container-fluid img-card" id="Cong">
            <div className="row p-4">
                <div className="col-lg-4">

                </div>
                    <div className="col-lg-4 bg-primary text-center">
                    <h1>Congratulations</h1>
                    <img src={Photo}/>
                    <h2>Kiran V</h2>
                    <p>Vishnu Institution of computer Eduction and Technology, Chennai.</p>
                    <img className=""src={watch}/>
                    </div>
                <div className="col-lg-4">
                </div>
            </div>
        </div>
     </>
    )
}
