import React from "react";

const Skill = () => {

    return(
        <div id="skill-section" className=" w-[full] h-[100vh] bg-white p-[30px] border">

        <div className="t-skill  w-[100%] h-[90vh] flex flex-row flex-wrap justify-around  ">

            <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px]  flex flex-row items-center justify-evenly cards">
                <img src="src\assets\HTML img.png" alt="html" style={{height: "100px", width: "100px"}}/>
                <div className="text-5xl font-bold text-red-500">HTML</div>
            </div>

            <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-row items-center justify-evenly cards">
                <img src="src\assets\CSS img.png" alt="html" style={{height: "100px", width: "100px"}}/>
            <div class="text-5xl font-bold text-[rgb(38,78,228)]">CSS</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\Javascript img.svg" alt="html" style={{height: "90px" ,width: "90px"}}/>
        <div className="text-4xl font-bold text-[rgb(247,224,24)]">JAVASCRIPT</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-row items-center justify-evenly cards">
            <img src="src\assets\React img.png" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-[rgb(1,218,255)]">REACTJS</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-row items-center justify-evenly cards">
            <img src="src\assets\Redux img.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-5xl font-bold text-[rgb(118,74,188)]">REDUX</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\bootstrap-logo.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-[rgb(122,17,248)]">BOOTSTRAP</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\Tailwind CSS.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-[rgb(56,189,248)]">TAILWIND CSS</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\java img.png" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-red-500">CORE JAVA</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\c img.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-3xl font-bold text-[rgb(57,73,171)]">C PROGRAMING</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\c++ img.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-3xl font-bold text-[rgb(0,117,192)]">C++ PROGRAMING</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\python img.svg" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-[rgb(49,110,159)]">PYTHON</div>
        </div>

        <div className="bg-[rgb(215,215,215)] border-2 border-black h-[200px] w-[300px] flex flex-col items-center justify-evenly cards">
            <img src="src\assets\sql img.png" alt="html" style={{height: "100px", width: "100px"}}/>
        <div className="text-4xl font-bold text-[rgb(0,121,214)]">SQL DATABASE</div>
        </div>

        </div>

 </div>
    )
}


export default Skill;