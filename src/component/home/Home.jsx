import Buttton from "../../shared/button/Buttton"
import digitizer from "../../assets/images/digitizer.png"

import First from "../first/First"
import OtherButtons from "../otherButtons/OtherButtons"
import Second from "../second/Second"
import Third from "../third/Third"
import { useState } from "react"
const Home = () => {
  // const [color,setColor] = useState(false)
  // function handleColorChange(){
  //   setColor(!color)
  // }
  const [color,setColor] = useState(false)
    function handleBackgroundColor(){
        setColor(!color)
    }
  return (
    

    <>
    <div className="min-h-screen p-[2rem]">
        <nav className="flex justify-center gap-[70rem] pb-[3rem]">
            <div className="bg-green-300 "><img src={digitizer} alt="" /></div>
            <div className=" border-solid">
        <button  className="text-blue-500 h-[2.2rem] rounded-xl border-solid border-2 border-blue-500 w-[6rem]">connect id</button> 
          </div>
    
        </nav>
        <div className="flex grid grid-cols-2 gap-6 px-[5rem] justify-center items-center">
              <div className="">
                        <h1><First handleBackgroundColor={handleBackgroundColor}/></h1>
                         <h1><Second/></h1>
                         <h1><Third/></h1>
              </div>
              <div className="dropshadow-xl min-h-screen p-[1rem]   border-2 border-gray-900 rounded-2xl ">
                <div className="p-[1rem]">
                  <p className=" font-bold text-2xl">+Digitized a new object</p>
                  <p className="">What new real world thing are you digitizing?</p>
                </div>
                <div>
                <input  placeholder="search" type="text" className="flex dropshadow-xl w-full py-[0.5rem] px-[1rem] rounded-[1rem] border outline-none " />
               </div> 
               <div className="py-[1rem]">
                <p className="pb-[1rem] font-bold">Most common objects</p>
                <div >
                 <OtherButtons/>
                </div>
                
                </div>             
              </div>
              
        </div>
             

    </div>
     
    </>
   
  )
}

export default Home