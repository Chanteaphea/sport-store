import './../styles/brand.css'
import fansport from './../images/Brands/fansport.png'
import FBT from './../images/Brands/FBT.png'
import Forward from './../images/Brands/Forward.png'
import NT from './../images/Brands/NT.png'
const Brand = () =>{
    return(
        <div className="brand-div-1">
            <div className="brand-div-2">
                <img src={fansport} alt="brand" />
            </div>
            <div className="brand-div-3">
                <img src={FBT} alt="brand" />
            </div>
            <div className="brand-div-4">
                <img src={Forward} alt="brand" />
            </div>
            <div className="brand-div-5">
                <img src={NT} alt="brand" />
            </div>
        </div>
    )
}
export default Brand;