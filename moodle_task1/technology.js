import React from "react";
import './technology.css'
import 'bootstrap/dist/css/bootstrap.css'
import profile1 from './profile1.jpg'
import building from './building.png'
import vrimages from './vrimages.jpg'
import ml from './ml.jpg'
import { Menu } from "../menu"; 


export function Technology(){
    return(
        <>
          <div className="container id=Tech">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    
                <div className="text-center">
                        <h1>Learn 4.0 Technologies</h1>
                        <p>Get trained by alumn of IITs and top companies like amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn 
                        directly from professionals involved in Product Develogment.</p>
                </div>   
                <div className="row justify-content-around">
                    <div className="col-lg-5 bor1">
                        <h3>Data Scientist</h3>
                        <p>A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting 
                        data to help drive decision-making in an organization.</p>
                        <img src={profile1} className="col-lg-4 float-right"/>  
                    </div>
                    
                    <div className="col-lg-5 bor2">
                        <h3>NOT Developer</h3>
                        <p>When you meet up with Operations people for drinks, you'll hear endless variations on it. Application teams 
                            attempting to assign ownership of a bug to a networking team because they didn't account for timeouts</p>
                        <img src={building} className="col-lg-4 float-right"/>
                    </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-lg-5 bor3">
                    <h3>VR Developer</h3>
                    <p>Company from India. Worked Several Top Gaming Companies. Developed VR Games for Multiple Platforms. Have a 
                        Team of Dedicated VR Specialists.</p>
                    <img src={vrimages} className="col-lg-4 float-right"/>
                </div>
                <div className="col-lg-5 bor4">
                    <h3>ML Engineer</h3>
                    <p>The ML Engineer considers responsible AI throughout the ML development process, and collaborates closely 
                        with other job roles to ensure long-term success of models.</p>
                    <img src={ml} className="col-lg-4 float-right"/>
                </div>
                </div>
                <div className="col-lg-2"></div>


            </div>
            </div>
          </div>
        </>
    );
}