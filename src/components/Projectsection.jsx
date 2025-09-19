import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Project = () => {

    return(
        <div id="project-section" className=" w-[100vw]  mx-auto mt-25 bg-[#F2F1F1] p-[50px]">

    <div className="text-5xl font-semibold text-[#ff004f] text-center ">Projects</div>

    {/* project-1  */}
<div className="projects h-[60vh] w-[60vw]  mx-auto rounded">
        {/* project image  */}
       <img src="src\assets\pw clone img.png" className="w-[100%] h-[100%]"/>
   

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className=" flex flex-row gap-2">
            <img src="src\assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="src\assets\CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="src\assets\Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold p-text1">PW Skills Clone</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium p-text2">A clone of the most popular education website physics wallah skills.<br/>Which provides accessibility and affordability being the support <br/> structure of high-quality,industry-relevant courses.

        </p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href="#"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
 {/* <!-- project number --> */}
         <div className="p-no1 text-7xl font-bold text-white">01</div>
        </div>


</div>


{/* <!-- project-2 --> */}
<div className="projects  h-[60vh] w-[60vw]  mx-auto rounded">
    {/* <!-- project image --> */}
   <img src="src\assets\spotify clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="src\assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="src\assets\CSS img.png"style={{height: "50px", width: "50px"}}/>
        <img src="src\assets\bootstrap-logo.svg" style={{height: "50px", width: "50px"}}/>
    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold p-text1">Spotify Clone</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">It's a digital music, podcast, and video service that gives<br/> you access to millions of songs and other content<br/> from creators all over the world.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Spotify11" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/Spotify11" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
        </a>
        {/* <!-- live link --> */}
         <a href=" https://tushar161616.github.io/Spotify11/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">02</div>
</div>

    </div>


 {/* <!-- project-3 --> */}
 <div className="projects h-[60vh] w-[60vw]  mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="../Assets/pw clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className=" flex flex-row gap-2">
        <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/React img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/Redux img.svg" style={{height: "50px", width: "50px"}}/>
    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">TechBazaar</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">Your One-Stop Shop for Electronic Accessories. TechBazaar is a cutting-edge online <br/>marketplace dedicated to providing high-quality electronic accessories <br/>at unbeatable prices.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
        </a>
        {/* <!-- live link --> */}
         <a href="#"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
         </a>
     </div>

{/* <!-- project number --> */}
<div className ="p-no1 text-7xl font-bold text-white ">03</div>

    </div>

 </div>


  {/* <!-- project-4 --> */}
  <div className="projects  h-[60vh] w-[60vw] mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="../Assets/google sheet clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>

    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">Google Sheet Clone</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">Google Sheets is a web-based application that enables users<br/> to create, update and modify spreadsheets and <br/>share the data online in real time.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Google-Sheet-Clone" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/Google-Sheet-Clone" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
        </a>
        {/* <!-- live link --> */}
         <a href=" https://tushar161616.github.io/Google-Sheet-Clone/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">04</div>

    </div>


</div>


   {/* <!-- project-5 --> */}
   <div className="projects h-[60vh] w-[60vw]  mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="../Assets/pw clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
        <img src="../Assets/Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">WildQuest</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">WildQuest is the ultimate online travel platform for thrill-seekers and adventure lovers. <br/>Whether you are looking for trekking in the mountains, jungle safaris, <br/>beach expeditions, or offbeat destinations, WildQuest helps<br/> you discover breathtaking experiences worldwide.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
        </a>
        {/* <!-- live link --> */}
         <a href="#"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">05</div>

    </div>


</div>


    {/* <!-- project-6 --> */}
    <div className="projects mx-auto h-[60vh] w-[60vw]   rounded">
        {/* <!-- project image --> */}
       <img src="../Assets/pw clone img.png" className="w-[100%] h-[100%]"/> 

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/React img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Redux img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">TastyCart</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium p-text2">TastyCart connects you with a variety of restaurants and eateries in your area.With an <br/>easy-to-use interface, real-time tracking, and secure payment options, TastyCart <br/>ensures a seamless and satisfying food ordering experience.

        </p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href="#"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">06</div>



        </div>


</div>


     {/* <!-- project-7 --> */}
     <div className="projects h-[60vh] w-[60vw] mx-auto   rounded">
        {/* <!-- project image --> */}
       <img src="../Assets/alarm app img.png" className="w-[100%] h-[100%]"/> 

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px]">Alarm App</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">online alarm platform designed to help you stay punctual and organized.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Alarm-App" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href=" https://tushar161616.github.io/Alarm-App/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">07</div>
</div>


        </div>

          {/* <!-- project-8 --> */}
     <div className="projects mx-auto h-[60vh] w-[60vw]  rounded">
        {/* <!-- project image --> */}
       <img src="../Assets/alarm app img.png" className="w-[100%] h-[100%]"/> 
{/* 
         <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px]">Alarm App</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">online alarm platform designed to help you stay punctual and organized.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Alarm-App" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href=" https://tushar161616.github.io/Alarm-App/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">08</div>
</div> 


        </div>

          {/* <!-- project-9 --> */}
     <div className="projects mx-auto h-[60vh] w-[60vw]  rounded">
        {/* <!-- project image --> */}
       <img src="../Assets/alarm app img.png" className="w-[100%] h-[100%]"/> 
{/* 
         <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="../Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="../Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px]">Alarm App</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">online alarm platform designed to help you stay punctual and organized.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Alarm-App" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href=" https://tushar161616.github.io/Alarm-App/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">08</div>
</div> 


        </div>

          {/* <!-- project-10 --> */}
     <div className="projects mx-auto h-[60vh] w-[60vw]  rounded">
        {/* <!-- project image --> */}
       <img src="\Assets\cookpal img.png" className="w-[100%] h-[100%]"/> 
{/* 
         <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="\Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px]">CookPal Website</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">Cookpal is a responsive food recipe application designed to deliver  a seamless and <br/> engaging user experience.It allows users to easily browse, view,  and manage <br/> a variety of recipes through a clean and intuitive interface.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Alarm-App" target="_blank"><i className="fa-brands fa-square-github fa-2xl" style={{color: "#ffffff"}}></i>
            </a>
            {/* <!-- live link --> */}
             <a href=" https://tushar161616.github.io/Alarm-App/"><i className="fa-solid fa-up-right-from-square fa-2xl" style={{color: "#ffffff"}}></i>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">08</div>
</div> 


        </div>

        {/* <!-- project-11 --> */}
        <div className="projects h-[60vh] w-[60vw]  mx-auto rounded">
        {/* project image  */}
       <img src="\Assets\pw clone img.png" className="w-[100%] h-[100%]"/>
   

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className=" flex flex-row gap-2">
            <img src="\Assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\CSS img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold p-text1">PW Skills Website</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium p-text2">A clone of the most popular education website physics wallah skills.<br/>Which provides accessibility and affordability being the support <br/> structure of high-quality,industry-relevant courses.

        </p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/PW-Skills-Clone" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://pw-skills2025.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
 {/* <!-- project number --> */}
         <div className="p-no1 text-7xl font-bold text-white">11</div>
        </div>


</div>


         {/* <!-- project-12 --> */}
        <div className="projects  h-[60vh] w-[60vw]  mx-auto rounded">
    {/* <!-- project image --> */}
   <img src="\Assets\spotify clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="\Assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\CSS img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\bootstrap-logo.svg" style={{height: "50px", width: "50px"}}/>
    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold p-text1">Spotify 2025</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">It's a digital music, podcast, and video service that gives<br/> you access to millions of songs and other content<br/> from creators all over the world.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Spotify11" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/Spotify11" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
        </a>
        {/* <!-- live link --> */}
         <a href="https://spotify-2025.netlify.app/"> <FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">12</div>
</div>

    </div>

</div>


    )


}


export default Project;