import './../styles/service.css'
import capitol from './../images/Delivery/Capitol.png'
import jandt from './../images/Delivery/jandt.png'
import keryexpress from './../images/Delivery/keryexpress.png'
import vet from './../images/Delivery/VET.png'
const Service = () =>{
    return(
        <div className="service-div-1">
            <div className="service-div-2">
                <img src={capitol} alt="service" />
            </div>
            <div className="service-div-3">
                <img src={jandt} alt="service" />
            </div>
            <div className="service-div-4">
                <img src={keryexpress} alt="service" />
            </div>
            <div className="service-div-5">
                <img src={vet} alt="service" />
            </div>
        </div>
    )

}
export default Service;