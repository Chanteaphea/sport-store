import './../styles/header.css'
import logo from './../images/logo.png';
import {FaBitbucket, FaSearch, FaShoppingBag, FaUser, FaWallet} from 'react-icons/fa'
const Header = () =>{
    return(
        <div className="div-header">
            <div className="div-1">
                <img src={logo} alt="logo" />
            </div>
            <div className="div-2">
                <input type="text" placeholder="ស្វែងរក..." />
                <div className='div-icon'>
                <FaSearch className='icon'></FaSearch>
                </div>
            </div>
            <div className='div-3'>
                <FaUser className="icon"></FaUser>
            </div>
            <div className='div-4'>
                <FaShoppingBag className='icon'></FaShoppingBag>
            </div>
        </div>
    )
}
export default Header;