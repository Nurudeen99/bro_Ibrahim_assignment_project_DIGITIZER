import Card from "../../shared/card/Card"
import business from "../../assets/images/business (1).png"
import car from "../../assets/images/car-sharing.png"
import rides from "../../assets/images/rides.png"


const Third = () => {
  return (
    <div className="pt-[2rem] ">
        <p className="pb-[1rem] font-bold text-xl">Your digitized objects...</p>
        <p className="p-[0.5rem]"><Card img={business}/></p>
        <p className="p-[0.5rem]"><Card img={car}/></p>
        <p className="p-[0.5rem]"><Card img={rides}/></p>
    </div>
  )
}

export default Third