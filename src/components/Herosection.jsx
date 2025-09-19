import React,{useState,useRef,useEffect} from "react";
import "../index.jsx"
import Typed from "typed.js";




const Hero = () => {
    
    // const [displaytext,setDisplaytext] = useState(text);
    // const velo = useRef({speed: 1, endIndex: 0});

    // useEffect(()=> {
    //   const interval =   setInterval(()=>{
    //     if(velo.current.endIndex === text.length){
    //         velo.current.speed = -1;
    //     }else if(velo.current.endIndex === 0){
    //         velo.current.speed = 1;
    //     }
    //         velo.current.endIndex += velo.current.speed;
    //         setDisplaytext(text.slice(0,velo.current.endIndex))
    //     },delay)

    //     return() =>{
    //         clearInterval(interval);
    //     }
    // },[delay,text])

     const el = useRef(null);

    React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 
        "Web Developer",
        "UI/UX Designer",
        "Frontend Developer",
         "Full Stack Developer",
        ],
       loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });

    return () => {
    
      typed.destroy();
    };
  }, []);


    return(
          <div id="hero-section" className="flex flex-row items-center  justify-evenly my-5">
         {/* text section  */}
        <div className="h-text flex flex-col items-left gap-5">
            <div className="h-text1 text-5xl">HI! <span className="text-[#ff004f] font-bold">Tushar Sharma</span></div>
            <div className="h-text2 text-4xl">I am a<span className="role text-blue-500 text-4xl ml-2 font-medium h-text2" ref={el}>  </span></div>
            <p className="text-xl">I am a software developer and here is my portfolio <br/>website. Here you will learn about my journey as a <br/>software developer</p>
            <button className="h-btn h-[60px] w-[150px] rounded-md text-2xl text-white bg-indigo-500 hover:bg-green-400 ...">Hire Me</button>
        </div>

         {/* img section  */}
        <div className="hero-img-div  h-[500px] w-[500px]  h-img">
            <img id="hero-img" src="IMG_20220211_181310-Photoroom.png"  style={{ height: "430px", width: "430px", margin: "30px", border: "8px double black", borderRadius: "50%"}}/>
            
            </div>
    </div>

    )
}

export default Hero;