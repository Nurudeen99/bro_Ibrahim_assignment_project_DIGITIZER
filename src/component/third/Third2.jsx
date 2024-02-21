import Card from "../../shared/card/Card"
import business from "../../assets/images/business (1).png"
import car from "../../assets/images/car-sharing.png"

 
 const Third2 = () => {
    return (
        <div className="pt-[2rem] ">
            <p className="pb-[1rem] font-bold text-xl">Your digitized Spaces...</p>
            <p className="p-[0.5rem]"><Card text="MyTaxi coverage : ws34.." text2="Openspace boundary" img={business}/></p>
            <p className="p-[0.5rem]"><Card text="My room : Is4a220" text2='Inspect' img={car}/></p>
        </div>
      )
 }
 
 export default Third2