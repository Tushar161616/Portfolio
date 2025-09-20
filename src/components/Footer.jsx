import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHackerrank, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    
    return(

        <div className="bot h-[35vh] w-[100vw] bg-[rgb(52,61,104)] flex flex-row justify-around ">

     {/* text section  */}

    <div className="text-white text-xl flex items-center gap-8 ">
        <div className="hover:text-green-500 font-semibold"><a href="#hero-section" >Home</a></div>
        <div className="hover:text-green-500 font-semibold"><a href="#project-section" >Project</a></div>
        <div className="hover:text-green-500 font-semibold"><a href="#contact-section" >Contact</a></div>
    </div>

   {/* link section  */}

    <div className="flex items-center gap-8 ">
        <a href="https://www.linkedin.com/in/tushar-sharma161616" target="_blank" id="linkedin-icon"> <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} /></a>
        <a href="https://github.com/Tushar161616" target="_blank" id="Github-icon"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} /></a>
        <a href="mailto:sharmatushar0688@gmail.com"  target="_blank" id="Gmail-icon"> <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}}  /></a>
        <a href="" target="_blank" id="instagram-icon"> <FontAwesomeIcon icon={faInstagram}  size="2xl" style={{color: "#ffffff",}} /></a>
        <a href="https://leetcode.com/u/sharmatushar0688/" target="_blank" id="Leetcode-icon"><img src="\Assets\leetcode img.png" style= {{height: "35px", width: "35px"}}/></a>
        <a href="https://www.hackerrank.com/profile/sharmatushar0688" target="_blank" id="Hackerrank-icon"> <FontAwesomeIcon icon={faHackerrank} size="2xl" style={{color: "#05e65b",}}  /></a>
        
    </div>

</div>
    )
}

export default Footer;