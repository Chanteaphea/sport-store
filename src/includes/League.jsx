import './../styles/League.css'
import AEU from './../images/Clubs/AEU.png'
import Army from './../images/Clubs/Army.png'
import ATG from './../images/Clubs/ATG.png'
import BK from './../images/Clubs/BK.png'
import EDC from './../images/Clubs/EDC.png'
import KSSC from './../images/Clubs/KSSC.png'
import NAGA from './../images/Clubs/NAGA.png'
import POLICE from './../images/Clubs/Police.png'
import {Link} from 'react-router-dom'
const League = () =>{
    return(
        <div className='league-div-1'>
        <div className='league-div-2'>
            
            <a href="#" className='league-div-2'>
            <div className='league-div-3'>
                <img src={AEU} alt="league"></img>
            </div>
            </a>
            <a href="#" className='league-div-2'>
            <div className='league-div-3'>
                <a href="#"><img src={Army} alt="league"></img></a>
            </div>
            </a>
            <a href="#" className='league-div-2'>
            <div className='league-div-3'>
                <img src={ATG} alt="league"></img>
            </div>
            </a>
            <a href="#" className='league-div-2'>
            <div className='league-div-3'>
                <img src={BK} alt="league"></img>
            </div>
            </a>
        </div>
        <div className='league-div-4'>
            <a href="#" className='league-div-4'>
            <div className='league-div-5'>
                <img src={EDC} alt="league"></img>
            </div>
            </a>
            <a href="#" className='league-div-4'>
            <div className='league-div-5'>
                <img src={KSSC} alt="league"></img>
            </div>
            </a>
            <a href="#" className='league-div-4'>
            <div className='league-div-5'>
                <img src={NAGA} alt="league"></img>
            </div>
            </a>
            <a href="#" className='league-div-4'>
            <div className='league-div-5'>
                <img src={POLICE} alt="league"></img>
            </div>
            </a>
        
            
            
            
        </div>
        </div>
    )
}
export default League;