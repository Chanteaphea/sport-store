import './../styles/footer.css'
import logo from './../images/logo.png'
import {FaLocationArrow, FaSms} from 'react-icons/fa'
import { BsChatLeftFill, BsTelephoneFill } from 'react-icons/bs'
const Footer = () =>{
    return(
        <div className='footer-div-1'>
            {/* upper */}
            <div className='footer-div-2'>
            <div className='footer-div-3'>
                {/* logo and description */}
            <div className='footer-div-4'>
                <div className='footer-div-5'>
                    <img src={logo} alt="logo" />
                </div>
                {/* footer-div-5 */}
                <div className='footer-div-6'>
                    <p>គោលបំណងរបស់យើងគឺ</p>
                    <p>ជួយសម្រួលក្នុងការទិញរបសើលោកអ្នក</p>
                </div>
                {/* footer-div-6 */}
            </div>
            {/* footer-div-4 */}
            {/* logo and description */}
            {/* horizontal line */}
            <div className='footer-div-7'>
            <div className='footer-div-8'></div>
            </div>
            {/* horizontal line */}
            {/* right part */}
            <div className='footer-div-9'>
                <div className='footer-div-10'>
                    <div className='footer-div-11'>
                        <FaLocationArrow className='footer-div-11-icon'></FaLocationArrow>
                    </div>
                    <div className='footer-div-12'>
                        <p>STEM Build, Phnom Penh, Cambodia</p>
                    </div>
                </div>
                <div className='footer-div-13'>
                    <div className='footer-div-14'>
                        <BsChatLeftFill className='footer-div-14-icon'></BsChatLeftFill>
                    </div>
                    <div className='footer-div-15'>
                        <p>keilakits@gmail.com</p>
                    </div>
                </div>
                <div className='footer-div-16'>
                    <div className='footer-div-17'>
                        <BsTelephoneFill className='footer-div-17-icon'></BsTelephoneFill>
                    </div>
                    <div className='footer-div-18'>
                        <p>012 345 678</p>
                    </div>
                </div>
            </div>
            {/* right part */}
            </div>
            {/* upper */}
            {/* lower */}
            <div className='footer-div-19'>
                <div className='footer-div-20'>
                    <p>Copyright 2022 - Keila Kits</p>
                </div>
            </div>
            {/* lower */}
            </div>
            {/* footer-div-2 */}
        </div>
    )
}
export default Footer;