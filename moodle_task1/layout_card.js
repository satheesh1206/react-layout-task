import React from "react";
import './layout_card.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";


export function Layout_card(){
    return(

        <>

        <div className="background ">
            
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button class="btn my-2 my-sm-0 text-light find_candidates" type="submit">Find Candidates</button>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link my-2 px-3 text-light" href="#">Find Jobs<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link my-2 text-light" href="#">Find Companies<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <FontAwesomeIcon icon={faBell} className="bell "/>    
            <button class="btn my-2 px-5 mx-5 my-sm-0" type="submit">Login</button>
            <button class="btn  my-2 my-sm-0 find_candidates text-light" type="submit">Register</button>
            </form>
        </div>
        </nav>
        

        </div>


        </>
    );
}