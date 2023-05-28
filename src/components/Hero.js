import './HeroStyle.css'
import { NavLink } from 'react-router-dom';
function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt='HerpImg' src={props.heroImg}/>

            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <NavLink to={props.url} className={props.btnClass}>{props.buttonText}</NavLink>
            </div>

        </div>
        </>
    )
}
export default Hero;