import "./list.scss";
import React from 'react'
import {useNavigate} from "react-router-dom";
import "../../images/pegasus.png"

const List = () => {
    const navigate = useNavigate() //used for button redirects
    return (
        <div className="list">
            <div className = "pegasus-pic">
           
           </div>
           
           <button onClick = {() => navigate('/')} >Back to Home</button>
       </div>
   )
}

export default List