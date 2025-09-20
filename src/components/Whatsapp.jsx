import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Whatsapp = () => {


    return(
        <div>
            <a href="https://wa.me/919057228494" target="_blank"><div id="whatsapp-icon" style={{position: "fixed", bottom: "10px", right: "5px",  borderRadius: "50%", width: "50px", height: "50px", padding:"10px", display: "flex", alignItems: "center",justifyContent: "center"}} className="bg-green-400">
        <FontAwesomeIcon icon={faWhatsapp} bounce size="2xl" style={{color: "#ffffff"}}/>
            </div>
            </a>
 </div>
    )
}

export default Whatsapp;