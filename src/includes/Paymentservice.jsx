import '../styles/payment.css'
import alipay from './../images/Payment/alipay.png'
import jbclogo from './../images/Payment/jbclogo.png'
import mastercard from './../images/Payment/mastercard.png'
import visa from './../images/Payment/visa.png'
import wing from './../images/Payment/wing.png'
const Paymentservice = () =>{
    return(
        <div className="payment-div-1">
            <div className="payment-div">
                <img src={alipay} alt="paymentservice" />
            </div>
            <div className="payment-div">
                <img src={jbclogo} alt="paymentservice" />
            </div>
            <div className="payment-div">
                <img src={mastercard} alt="paymentservice" />
            </div>
            <div className="payment-div">
                <img src={visa} alt="paymentservice" />
            </div>
            <div className="payment-div">
                <img src={wing} alt="paymentservice" />
            </div>
        </div>
    )
}
export default Paymentservice;