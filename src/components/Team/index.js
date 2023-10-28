import Employee from '../Employee';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    return(
        props.employees.length > 0 && <section className='team' style={{backgroundColor: hexToRgba(props.primaryColor, 0.6)}}>
            <input onChange={event => props.changeColor(event.target.value, props.id)} type='color' value={props.primaryColor} className='color-input' />
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            
            <div className='employees'>
                {props.employees.map(employee => <Employee background={props.primaryColor} key={employee.name} name={employee.name} role={employee.role} image={employee.image} id={employee.id} onDelete={props.onDelete} favorite={employee.favorite} onFavorite={props.onFavorite} />)}
            </div>
        </section>
    );
}

export default Team;