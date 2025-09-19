import React from "react";




const Navbar = () => {

    return(
          <nav className="flex flex-row justify-around items-center   h-[100px] relative">

        <div className="nav-logo flex mt-[10px]">
            
             <div className="flex items-end">
             {/* <img src="../Assets/t letter img.png"  class="nav-img h-[50px] w-[50px] mr-0 ">  */}
             <span className="nav-t text-5xl font-medium">Portfolio</span>
             
             

             </div>

              
               
                
        </div>
       
 {/* nav items  */}
        <div className="nav-items flex flex-row  gap-10  text-2xl text-gray-600">
             {/* <div class="hover:text-black hover:font-bold hover:cursor-pointer "><a href="#hero-section" >Home</a></div>  */}

            <div className="hover:text-black hover:cursor-pointer hover:font-bold"><a href="#project-section" className="navlink">Projects</a></div>
            <div className="hover:text-black hover:cursor-pointer hover:font-bold"><a href="#skill-section" className="navlink" >Skill</a></div>
            <div className="hover:text-black hover:cursor-pointer hover:font-bold"><a href="#about-section" className="navlink" >About Me</a></div>
            <div className="hover:text-black hover:cursor-pointer hover:font-bold"><a href="#contact-section" className="navlink" >Contact Me</a></div>
        </div>
       
    </nav>
    )
}

export default Navbar;