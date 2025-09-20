import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Copyright = () => {

    return(
         <div className="h-[30px] w-[100vw] bg-gray-600 text-white text-center text-lg">Made With Love  <FontAwesomeIcon icon={faHeart} beat style={{color: "#ff0000"}}/> by Tushar</div>

    )
}


export default Copyright;