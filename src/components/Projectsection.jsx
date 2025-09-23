import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Project = () => {

    return(
        <div id="project-section" className=" w-[100vw]  mx-auto mt-25 bg-[#F2F1F1] p-[50px]">

    <div className="text-5xl font-semibold text-[#ff004f] text-center ">Projects</div>

    {/* project-1  */}

    <div className="projects h-[60vh] w-[60vw]  mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="\Assets\ytrue js img .png" className="w-[100%] h-[100%]"/> 

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
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">Ytrue Website</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">Your One-Stop Shop for All Types of Led Lights.It is a cutting-edge online <br/>marketplace dedicated to providing high-quality Led Lights <br/>at wholesale prices.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/ytrue-ecommerce-website" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
        </a>
        {/* <!-- live link --> */}
         <a href="https://ytrue-ecommerce-website.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
         </a>
     </div>

{/* <!-- project number --> */}
<div className ="p-no1 text-7xl font-bold text-white ">01</div>

    </div>

 </div>




{/* <!-- project-2 --> */}
<div className="projects  h-[60vh] w-[60vw]  mx-auto rounded">
    {/* <!-- project image --> */}
   <img src="\Assets\techbazzar img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    {/* <div className="flex flex-row gap-2">
        <img src="\Assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\React img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\Redux img.svg" style={{height: "50px", width: "50px"}}/>
    </div> */}
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold p-text1">TechBazar</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">TechBazar is a WordPress-based e-commerce website for electronic accessories,<br/> featuring a responsive design, easy navigation, secure checkout,<br/> and SEO optimization for a smooth shopping experience.


    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        {/* <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Spotify11" target="_blank">Read More</a></button> */}
        {/* <!-- github link --> */}
        {/* <a  href="https://github.com/Tushar161616/WildQuest-App" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
        </a> */}
        {/* <!-- live link --> */}
         <a href="https://techbazaars.rf.gd/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">02</div>
</div>

    </div>


 {/* <!-- project-3 --> */}
 <div className="projects h-[60vh] w-[60vw]  mx-auto rounded">
        {/* project image  */}
       <img src="\Assets\cookpal img.png" className="w-[100%] h-[100%]"/>
   

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className=" flex flex-row gap-2">
             <img src="\Assets\HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\React img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\Redux img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold p-text1">Pet-Pooja App</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium p-text2">This Pet-Pooja App is a responsive ReactJS application that provides a smoothand intuitive <br/>  platform for browsing restaurants, exploring menus, andplacing orders with  <br/> real-time updates for a seamless user experience.

        </p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/pet-pooja-app" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://pet-pooja-app.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
 {/* <!-- project number --> */}
         <div className="p-no1 text-7xl font-bold text-white">03</div>
        </div>


</div>


  {/* <!-- project-4 --> */}
   <div className="projects h-[60vh] w-[60vw]  mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="\Assets\Drishya img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="\Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets/Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets\React img.png" style={{height: "50px", width: "50px"}}/>
    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">Drishya IMG</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">Drishya Img is an image search application that integrates the API, allowing users to discover<br/> and explore high-quality photos through a clean and intuitive interface.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/Drishya-Image" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
        </a>
        {/* <!-- live link --> */}
         <a href="https://drishya-image.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">04</div>

    </div>


</div>


  {/* <!-- project-5 --> */}
  <div className="projects  h-[60vh] w-[60vw] mx-auto  rounded">
    {/* <!-- project image --> */}
   <img src="../Assets/google sheet clone img.png" className="w-[100%] h-[100%]"/> 

     {/* <!-- project text div--> */}
<div className="project-content flex flex-col items-center text-center justify-center ">
    {/* <!-- Tech icons --> */}
    <div className="flex flex-row gap-2">
        <img src="\Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets/CSS img.png" style={{height: "50px", width: "50px"}}/>
        <img src="\Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>

    </div>
    {/* <!-- project name --> */}
    <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">Google Sheet WebApp</h2>
    {/* <!-- about project --> */}
    <p className="text-gray-300  font-medium p-text2">Google Sheets is a web-based application that enables users<br/> to create, update and modify spreadsheets and <br/>share the data online in real time.

    </p>
    {/* <!-- btn and live links --> */}
     <div className="flex flex-row items-center gap-5 m-[10px]">
        <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Google-Sheet-Clone" target="_blank">Read More</a></button>
        {/* <!-- github link --> */}
        <a  href="https://github.com/Tushar161616/Google-Sheet-Clone" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
        </a>
        {/* <!-- live link --> */}
         <a href="https://google-sheet2025.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
         </a>
     </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">05</div>

    </div>


</div>


 


    {/* <!-- project-6 --> */}
    <div className="projects mx-auto h-[60vh] w-[60vw]   rounded">
        {/* <!-- project image --> */}
       <img src="#" className="w-[100%] h-[100%]"/> 

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
        <h2 className="text-white text-4xl font-semibold m-[10px] p-text1">Zerion Cars</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium p-text2">An animated web experience that redefines how luxury cars are showcased <br/>online with style, speed, and sophistication.

        </p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="#" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="#"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">06</div>



        </div>


</div>


     {/* <!-- project-7 --> */}
     <div className="projects h-[60vh] w-[60vw] mx-auto   rounded">
        {/* <!-- project image --> */}
       <img src="\Assets\jira-d-img .png" className="w-[100%] h-[100%]"/> 

         {/* <!-- project text div--> */}
    <div className="project-content flex flex-col items-center text-center justify-center ">
        {/* <!-- Tech icons --> */}
        <div className="flex flex-row gap-2">
            <img src="\Assets/HTML img.png" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets\Tailwind CSS.svg" style={{height: "50px", width: "50px"}}/>
            <img src="\Assets/Javascript img.svg" style={{height: "50px", width: "50px"}}/>
        </div>
        {/* <!-- project name --> */}
        <h2 className="text-white text-4xl font-semibold m-[10px]">Jira Dashboard</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">Jira Dashboard is a project management tool featuring draggable elements forseamless task <br/> organization, offering a clear view of progress and team performance.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Jira-Dashboard" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://jira-2025.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">07</div>
</div>


        </div>

          {/* <!-- project-8 --> */}
     <div className="projects mx-auto h-[60vh] w-[60vw]  rounded">
        {/* <!-- project image --> */}
       <img src="\Assets\ems-2025 img.png" className="w-[100%] h-[100%]"/> 
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
        <h2 className="text-white text-4xl font-semibold m-[10px]">Employee Management System</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">Employee Management System is a web app that helps track employee details,<br/> roles, and performance with a simple and efficient interface.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/EMS-2025" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://ems-2025.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">08</div>
</div> 


        </div>

          {/* <!-- project-9 --> */}
     <div className="projects mx-auto h-[60vh] w-[60vw]  rounded">
        {/* <!-- project image --> */}
       <img src="\Assets\Blinkit-img.png" className="w-[100%] h-[100%]"/> 
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
        <h2 className="text-white text-4xl font-semibold m-[10px]">Blinkit 2025</h2>
        {/* <!-- about project --> */}
        <p className="text-gray-300  font-medium">Blinkit Clone is a quick grocery delivery app that lets users browse, add to cart, and get <br/>essentials delivered in minutes with a smooth and intuitive experience.</p>
        {/* <!-- btn and live links --> */}
         <div className="flex flex-row items-center gap-5 m-[10px]">
            <button className="rounded border-3 border-black text-lg h-[50px] w-[120px] bg-red-500 hover:bg-white hover:text-blue-500"><a  href="https://github.com/Tushar161616/Alarm-App" target="_blank">Read More</a></button>
            {/* <!-- github link --> */}
            <a  href="https://github.com/Tushar161616/Blinkit-clone" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://blinkit-ui.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no1 text-7xl font-bold text-white ">09</div>
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
            <a  href="https://github.com/Tushar161616/CookPal-2025" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff"}}/>
            </a>
            {/* <!-- live link --> */}
             <a href="https://cookpal-2025.netlify.app/"><FontAwesomeIcon icon={faUpRightFromSquare} size="2xl" style={{color: "#ffffff"}}/>
             </a>
         </div>
{/* <!-- project number --> */}
<div className="p-no2 text-7xl font-bold text-white ">10</div>
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