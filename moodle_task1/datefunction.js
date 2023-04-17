import React from "react";
import './datefunction.css'
import 'bootstrap/dist/css/bootstrap.css'

export function Datefunction(){
     function calulator()
     {
       var courseDate = document.getElementById("courseDate").value;
       var dt=document.getElementById("divid");
       var date=new Date(courseDate);
       date.setDate(date.getDate()+90);
       var temp=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
       dt.innerText="End Date:"+temp;
    }
    return(
        <>
        
        <div className="cent mt-5">
            <div>
            <label>Course Starting Date:</label>
            <input type="date" id="courseDate"/>
            <input type="button" onClick={calulator}value="calulator"/>
                <div id="divid">

                </div>
            </div>
        </div>
        </>
    );
}