import React from "react";
import './social.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Menu } from "../menu";


export function Social(){
    return(
        <>
        <div className="container-fluid img1">
            <div className="row">
                <div className="col-lg-4"> </div>
                    <div className="col-lg-4 text-center mt-5">
                        <h1 className="text-light">Social Buttons</h1>
                        <div className="d-flex flex-row justify-content-around">
                            <button className="bg-warning bord">Like</button>
                            <button className="bord">Comment</button>
                            <button className="bg-info   bord">Share</button>
                        </div>
                    </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    );
}