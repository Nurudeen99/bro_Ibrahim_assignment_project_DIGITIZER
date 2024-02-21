
const Card = ({img,text,text2}) => {
  return (
    <div className="flex p-[0.3rem] justify-between border-light border-2 border-gray-900 rounded-xl">

        <div className="flex items-center gap-[1rem]">
            <div><img className="h-[1.5rem]" src={img} alt="img..." /></div>
            <div>
               <p className="font-bold">{text}</p> 
               <p>{text2}</p>
            </div>
        </div>
        <div className="flex flex-col items-center m-[rem]">
            <p>Edit</p>
            <p>5 days</p>
        </div>
    </div>
  )
}

export default Card