import './../../styles/item.css'
import item from '../../images/Products/bkwomen.jpg'
import { FaStar } from 'react-icons/fa';
const Item = () =>{
    return(
        <div className='item-div-1'>
            <div className='item-div-2'>
                <img src={item} alt="item1" />
            </div>
            <div className='item-div-3'>
                <p>អាវក្រៅ ក្លឹបភ្នំពេញក្រោន ២០២១</p>
            </div>
            <div className='item-div-4'>
                <p>៨០,០០០រៀល</p>
            </div>
            <div className='item-div-5'>
                <FaStar className='item-star'></FaStar>
                <FaStar className='item-star'></FaStar>
                <FaStar className='item-star'></FaStar>
                <FaStar className='item-star'></FaStar>
                <FaStar className='item-star item-star-highlighted'></FaStar>
            </div>
        </div>
    )
}
export default Item;