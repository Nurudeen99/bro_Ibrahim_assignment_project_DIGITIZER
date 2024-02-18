import Buttton from "../../shared/button/Buttton"

const First = ({backgroundColor,handleBackgroundColor}) => {
    // const [color,setColor] = useState(false)
    // function handleBackgroundColor(){
    //     setColor(!color)
    // }
  return (
    <div className=" flex flex-col justify-center items-center">
        <div className=" pb-[3rem]">
        <p className="pb-[3rem] font-bold text-5xl">Digital version for everything</p>
        <div  className="flex gap-[1rem] ">

            <Buttton  text="Object"/>
            <Buttton text="Spaces"/>

        </div>
        </div>
        
      


    </div>
  )
}

export default First