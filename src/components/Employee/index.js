import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './Employee.css';

const Employee = ({background, name, role, image, id, onDelete, favorite, onFavorite}) => {
    return (
        <div className='employee'>
            <AiFillCloseCircle size={25} className='delete' onClick={event => onDelete(id)} />
            <div className='header' style={{backgroundColor: background}}>
                <img src={image} alt="" />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <div className='favorite'>
                    {favorite ? <AiFillHeart color='#FF0000' size={25} onClick={event => onFavorite(id)}/> : <AiOutlineHeart size={25} onClick={event => onFavorite(id)}/>}
                </div>
            </div>
        </div>
    );
}

export default Employee;