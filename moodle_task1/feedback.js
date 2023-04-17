import React from "react";
import './feedback.css'
import 'bootstrap/dist/css/bootstrap.css'
import sad from './sad.png'
import none from './none.png'
import smiling from './smiling.png'
import { Link } from "react-router-dom";



export function Feedback(){
    return(
        <>
           <div className="container-fluid colo id=Feed">
               <div className="row">
                    <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="text-center bg-info mt-5 pd-4  leng">
                            <h1>How satisfied are you with our customer support performance?</h1>
                                <Link to="/Heart"><img className="wd2 mt-5"src={none}/></Link>
                                <Link to="/Heart"><img className=" wd1 mt-5"src={sad}/></Link>
                                <Link to="/Heart"><img className="wd mt-5" src={smiling}/></Link>
                              </div>
                            
                        </div>
                   <div className="col-lg-2"></div>
                </div>
           </div>


        </>
    );
}
