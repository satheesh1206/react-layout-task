import React from "react";
import './heart.css'
import 'bootstrap/dist/css/bootstrap.css'
import love from './love.png'


export function Heart(){
    return(
        <>
        <div className="container p-5 id=Hea">
                    <div className="row cen bg-success my-5">
                        <div className="text-center p-5">
                            <img src={love} className="col-lg-12"/>
                            <h1>Thank you</h1>
                            <p>We will use your feedback to improve our customer support performance.</p>
                        </div>
                    </div>
                </div>
        
        
        </>
    );
}