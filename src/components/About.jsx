import React from "react";

const About = () => {


    return(
        <div id="about-section" className=" w-[100vw] h-[70vh]   bg-[rgb(231,231,231)] flex flex-row justify-evenly border p-[20px]">
        {/* about-img   */}
    <div className="a-img w-[20vw] h-[100%] ml-[70px] mt-[60px]">
        <img id="p-img" className="border-5 border-black rounded-3xl shadow-2xl h-[40vh] " src="\Assets\IMG_20220211_154917-removebg-preview.png" alt="Profile-img"/>
    </div>
    {/* about-content  */}
    <div className="a-content w-[70vw] h-[100%] flex flex-col gap-2 mt-[10px]">
        <span className="text-5xl font-semibold text-[#ff004f] p-text1">About Me</span>
        <p className="text-xl font-medium p-text2">I'am Tushar Sharma and I Have Done BCA From Maharishi Arvind School of Management Studies, specializing in <br/>  Information Technology. Passionate about Software development With a strong foundation in front-end technologies, I <br/>enjoy building dynamic, user-friendly, and scalable web applications. My problem-solving skills and ability to <br/>adapt to new technologies help me deliver efficient and optimized solutions</p>
        <br/>
        <div className="text-xl font-medium p-text2">Current Location : Jaipur (Rajasthan).</div>


        <span className="text-5xl font-semibold text-[#ff004f] p-text1">Education</span>
        <ul>
            <li className="text-xl font-medium p-text2">Bachelor of Computer Applications,Computer Science</li>
            <li className="text-lg p-text2">Maharishi Arvind School of Management Studies.</li>
        </ul>
    </div>

</div>
    )
}


export default About;