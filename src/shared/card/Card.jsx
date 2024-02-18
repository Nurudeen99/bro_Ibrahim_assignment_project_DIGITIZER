
const Card = ({img}) => {
  return (
    <div className="flex p-[0.3rem] justify-between border-light border-2 border-gray-900 rounded-xl">

        <div className="flex items-center gap-[1rem]">
            <p><img className="h-[1.5rem]" src={img} alt="img..." /></p>
            <div>
               <p className="font-bold">Cars24a1</p> 
               <p>Car</p>
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