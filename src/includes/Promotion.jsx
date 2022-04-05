import promo1 from './../images/Banner/promo1.jpg'
import promo2 from './../images/Banner/promo2.jpg'
import './../styles/promotion.css'
const Promotion = () =>{
    return(
        <div className="promotion-div-1">
            <div className="promotion-div-2">
                <img src={promo1} alt="promotion" />
            </div>
            <div className="promotion-div-3">
                <img src={promo2} alt="promotion" />
            </div>
        </div>
    )
}
export default Promotion;