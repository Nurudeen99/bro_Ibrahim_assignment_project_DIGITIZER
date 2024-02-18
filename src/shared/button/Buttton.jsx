
const Buttton = ({text,backgroundColor,handleBackgroundColor}) => {
  return (
    <>
    <div className=" border-solid">
        <button style={{backgroundColor:handleBackgroundColor}} className=" h-[2.2rem] rounded-2xl border-solid border-2 border-gray-900 w-[6rem]">{text}</button> 
        
    </div>
    </>
    
  )
}

export default Buttton