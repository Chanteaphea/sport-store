import './../styles/League.css'
import AEU from './../images/Clubs/AEU.png'
import Army from './../images/Clubs/Army.png'
import ATG from './../images/Clubs/ATG.png'
import BK from './../images/Clubs/BK.png'
// import AEU from './../images/Clubs/AEU.png'
// import AEU from './../images/Clubs/AEU.png'
// import AEU from './../images/Clubs/AEU.png'
// import AEU from './../images/Clubs/AEU.png'
const League = () =>{
    return(
        <div className='league-div-1'>
        <div className='league-div-2'>
            <div className='league-div-3'>
                <img src={AEU} alt="league"></img>
            </div>
            <div className='league-div-3'>
                <img src={Army} alt="league"></img>
            </div>
            <div className='league-div-3'>
                <img src={ATG} alt="league"></img>
            </div>
            <div className='league-div-3'>
                <img src={BK} alt="league"></img>
            </div>
        </div>
        <div className='league-div-4'>
        <div className='league-div-5'>
                <img src="" alt="league"></img>
            </div>
            <div className='league-div-5'>
                <img src="" alt="league"></img>
            </div>
            <div className='league-div-5'>
                <img src="" alt="league"></img>
            </div>
            <div className='league-div-5'>
                <img src="" alt="league"></img>
            </div>
        </div>
        </div>
    )
}
export default League;