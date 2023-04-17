import React from "react";
import './login.css'
import 'bootstrap/dist/css/bootstrap.css'
import computer from './computer.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../menu";

export function Login(){
    return(
        <>
            <div className="color container-fluid id=Log">
                <div className="row p-5">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 bg-light row p-5">
                        <div className="col-lg-6 cen">
                            <img src={computer} className="col-sm-12"/>
                        </div>
                        <div className="col-lg-6 text-center p-1">
                            <h1>Member Login</h1>

                                    <div className="my-5">
                                        <span className="broderstyle1"><FontAwesomeIcon icon={faEnvelope}/>
                                        <input type="text" placeholder="email" className="bnone" size="15"/></span>
                                    </div>
                                    <div className="my-5">
                                        <span className="broderstyle1"><FontAwesomeIcon icon={faLock} />
                                        <input type="text" placeholder="password" className="bnone" size="15"/></span>
                                    </div>
                            
                                    <button className="broderstyle mb-5">LOGIN</button>
                                    <div>
                                        <p>Forgot <span className="spn">Username / Password ?</span></p>
                                    </div>

                            <div> <span className="spn">Create your account</span></div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>

                </div>
            </div>
        </>
        );
    }