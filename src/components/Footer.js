import './FooterStyles.css'
import {  } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div><h1>Trips</h1><p>chosse your favoutitr destination</p></div>
                <div className='iconz'>

                <div><NavLink to='/'><i className='fa-brands fa-facebook-square'></i></NavLink></div>
                <div><NavLink to='/'><i className='fa-brands fa-instagram-square'></i></NavLink></div>
                <div><NavLink to='/'><i className='fa-brands fa-behance-square'></i></NavLink></div>
                <div><NavLink to='/'><i className='fa-brands fa-twitter-square'></i></NavLink></div>
                </div>
             </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href='/'>ChangeLog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer