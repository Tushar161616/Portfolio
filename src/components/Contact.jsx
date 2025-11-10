import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {

    return(
        <div id="contact-section" className=" w-[100vw] h-[100vh] ">

    <form className="bg-[rgb(148,49,242)] h-[90vh] w-[70vw] mx-auto my-[40px] rounded-2xl p-[10px]">
   {/* Heading  */}
 <div className=" flex  items-center justify-around">
        <span className="text-6xl font-bold text-white  my-[20px] h-text1">Contact Me :-</span>
        <span className="text-4xl bg-linear-65 from-purple-500 to-pink-500 font-bold h-text2">Let's Talk</span>
 </div>
    {/* form  */}
        <div className="frm-input flex flex-col">

        <input type="text" placeholder="Enter your name" className="bg-white h-[50px] w-[50vw] text-lg p-[10px] mx-auto shadow" required />
        <br/>
        <input type="email" placeholder="Enter your E-mail address" className="bg-white h-[50px] w-[50vw] text-lg p-[10px] mx-auto shadow" required />
        <br/>
        <input type="text" placeholder="Enter your subject" className="bg-white h-[50px] w-[50vw] text-lg p-[10px] mx-auto shadow" required />
        <br/>
        <textarea placeholder="Enter your message " className="bg-white h-[180px] w-[50vw] text-lg p-[10px] mx-auto shadow"></textarea>

        </div>
     {/* form buttons  */}
    <div className="f-btn flex items-center gap-5">
        <button type="submit" className="bg-green-300 h-[70px] w-[250px] ml-[160px] my-8 rounded text-xl hover:bg-indigo-500 f-btn1">
            Send Message <FontAwesomeIcon icon={faPaperPlane} className="submit-icon" aria-hidden={true} />
          </button>

          <a id="dwn" href="../Assets/Tushar Resume448801.pdf" download=""><button  className="bg-white f-btn1 border-2 hover:bg-[#ff004f] text-xl h-[70px] w-[250px] rounded  flex items-center justify-evenly">
            Download CV <img src="\Assets\download 2 icon.gif" alt="icon" style={{height: "40px"}}/>
          </button></a>

    </div>

</form>

</div>
    )
}

export default Contact;