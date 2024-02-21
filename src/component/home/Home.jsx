import Buttton from "../../shared/button/Buttton"
import digitizer from "../../assets/images/digitizer.png"
// import First from "../first/First"
import OtherButtons from "../otherButtons/OtherButtons"
import Second from "../second/Second"
import Third from "../third/Third"
import { useState } from "react"
import Second2 from "../second/Second2"
import Third2 from "../third/Third2"
import Object from "../object/Object"
import Space from "../space/Space"
const Home = () => {
  // const [color,setColor] = useState(false)
  // function handleColorChange(){
  //   setColor(!color)
  // }
  // const [color,setColor] = useState(false)
  //   function handleBackgroundColor(){
  //       setColor(!color)
  //   }
  const [step,setStep]= useState(1)
    function handleObjectButton(){
      if(step==1){
        setStep(step)
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
    

    <>
    <div className="min-h-screen p-[2rem]">
        <nav className="flex justify-center gap-[70rem] pb-[3rem]">
            <div className=""><img src={digitizer} alt="" /></div>
            <div className=" border-solid">
        <button  className="text-blue-500 h-[2.2rem] rounded-xl border-solid border-2 border-blue-500 w-[6rem]">connect ID</button> 
          </div>
    
        </nav>

        <div className="flex grid grid-cols-2 gap-6 px-[5rem] justify-center items-center">
          <div className="">
              <div className=" flex flex-col justify-center items-center">
                 <div className=" pb-[3rem]">
                <p className="pb-[3rem] font-bold text-5xl">Digital version for everything</p>
                
                <div  className="flex gap-[1rem] ">
                   <div onClick={handleObjectButton} className={`rounded-[2rem] ${step==1? "bg-black":""} ${step==1? "text-white":"text-black"}`}><Buttton  text="Object" /></div>
                   <div onClick={handleSpacesButton} className={`rounded-[2rem] ${step==2?"bg-black":""} ${step==2? "text-white":"text-black"}`}><Buttton text="Spaces" /></div>
                </div>
                                         {/* {step==1? && <Second/> || step==2? <Third/>} */}

                 </div>
                    </div>

                    {step ==1 && <h1><Second/></h1>  || step ==2 && <h1><Second2/></h1>}
                    {step ==1 && <h1><Third/></h1>  || step ==2 && <h1><Third2/></h1>}
                         {/* <h1><First/></h1> */}
                         {/* <h1><Second/></h1>
                         <h1><Third/></h1> */}
                   </div>
                  <div className="bg-gray-100 dropshadow-xl min-h-screen p-[1rem]   border-2 border-gray-900 rounded-2xl ">
                        {step==1 && <Object/> || step == 2 && <Space/>}
                        {step==1 && <OtherButtons/>}
                        {/* <Object/> 
                        <OtherButtons/> */}
                      
                  </div>
           </div>
    </div>
     
    </>
   
  )
}

export default Home

