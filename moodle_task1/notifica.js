import React from "react";
import './notifica.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../menu";



export function Notifica(){
    return(
        <>
       
        <div className="container-fluid text-center pt-5 id=Noti">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div ><h1>Notifications</h1></div> 
                    <div className="bg-primary"><h3 className="p-4 text-white"><FontAwesomeIcon icon={faCircleCheck}/>Information Message</h3></div>
                    <div className="bg-success"><h3 className="p-4 text-white"><FontAwesomeIcon icon={faCircleCheck}/>Success Message</h3></div>
                    <div className="bg-warning"><h3 className="p-4 text-white"><FontAwesomeIcon icon={faBell}/>Warning Message</h3></div>
                    <div className="bg-danger"><h3 className="p-4 text-white"><FontAwesomeIcon icon={faCircleInfo}/>Error Message</h3></div>
                </div> 
                <div className="col-lg-4"></div>
            </div> 
        </div>   
        





        </>
    );
}