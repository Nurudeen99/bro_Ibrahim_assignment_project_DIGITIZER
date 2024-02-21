import { useState } from "react"
import Buttton from "../../shared/button/Buttton"

const First = () => {
    const [step,setStep]= useState(0)
    function handleObjectButton(){
      if(step==0){
        setStep(step +1)
      }else if(step>=2){
        setStep(step -1)
      }
       console.log(step)

    }
    function handleSpacesButton(){
     if(step==1){
      setStep(step +1)
     }else if(step>=2){
      setStep(step)
     }
       console.log(step)
    }
  return (
    <div className=" flex flex-col justify-center items-center">
        <div className=" pb-[3rem]">
        <p className="pb-[3rem] font-bold text-5xl">Digital version for everything</p>
        <div  className="flex gap-[1rem] ">
      
             <div onClick={handleObjectButton} className={`rounded-[2rem] ${step==1? "bg-black":""} ${step==1? "text-white":"text-black"}`}><Buttton  text="Object" /></div>
             <div onClick={handleSpacesButton} className={`rounded-[2rem] ${step==2?"bg-black":""} ${step==2? "text-white":"text-black"}`}><Buttton text="Spaces" /></div>
                
                
          
        </div>
        </div>
        
      


    </div>
  )
}
export default First
// import React, { useState } from "react";
// import Buttton from "../../shared/button/Button"; // corrected typo in Button import

// const First = () => {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleBackgroundColor = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="pb-[3rem]">
//         <p className="pb-[3rem] font-bold text-5xl">Digital version for everything</p>
//         <div className="flex gap-[1rem] ">
//           <Buttton
//             text="Object"
//             onClick={() => handleBackgroundColor("Object")}
//             style={{ backgroundColor: activeButton === "Object" ? "blue" : "" }}
//           />
//           <Buttton
//             text="Spaces"
//             onClick={() => handleBackgroundColor("Spaces")}
//             style={{ backgroundColor: activeButton === "Spaces" ? "blue" : "" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First;
