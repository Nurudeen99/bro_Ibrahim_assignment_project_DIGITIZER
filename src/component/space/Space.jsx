import map from "../../assets/images/map.png"

const Space = () => {
  return (
    <>
     <div className="p-[1rem]">
                  <p className=" font-bold text-2xl">+Digitized a new SPACE</p>
                  <p className="">What new real world thing are you digitizing?</p>
                </div>
                <div>
                <input  placeholder="search" type="text" className="flex dropshadow-xl w-full py-[0.5rem] px-[1rem] rounded-[1rem] border outline-none " />
               </div> 
               <div className="py-[1rem]">
                <p className="pb-[1rem] font-bold">Most common open spaces</p>
                <div className=" text-center drop-shadow-xl  h-[2rem] w-[11rem] border-2 border-gray-900 rounded-xl">
                    <p className="">Openspace boundary</p>
                    
                </div>
                <div className=" bg-orange-100 rounded-xl">
                    <img className="my-[2rem] drop-shadow-xl  rounded-[3rem] overflow-hidden py-[3rem] " src={map} alt="" />
                </div>
                
                </div> 
            
    </>
  )
}

export default Space