import React from "react";
import './league.css'
import 'bootstrap/dist/css/bootstrap.css'
import csk from './csk.png'
import royal from './rcb.png'
import { Menu } from "../menu";

 export function Leag(){
    return(
        <>
        
        <div className="container-fluid id=Lea">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 text-center bg-primary p-4 mt-5">
                    <h1 className="text-light">Super Over league</h1>
                    <img src={csk} width="200"/>
                    <img src={royal} width="200"/>
                </div>    
                <div className="col-lg-4"></div>
            </div>
        </div>
        


    
        </>
    );
}
