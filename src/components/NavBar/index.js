import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCamera, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png'
const NavBar = () => {
    const [state, setState] = React.useState(true)
    return(
        <div className='mobile-nav'>
        <Link className='logo' to='/'>
            <img src={logo} alt="MainLogo"/>
       </Link> 

        {   state ? 
                <button className='hamburger-button'
                onClick={()=>{setState(false)}}>
                    <FontAwesomeIcon icon={faBars} color='#4d4d42' />
                </button>
            :

            <nav>
           <NavLink onClick={()=>{setState(true)}} exact='true' className='home-button' to="/" >
               <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
           </NavLink>
           <NavLink onClick={()=>{setState(true)}} exact='true' className='about-button' to="/about" >
               <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
           </NavLink>
           <NavLink onClick={()=>{setState(true)}} exact='true' className='contact-button'  to="/contact" >
               <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
           </NavLink>
           <NavLink onClick={()=>{setState(true)}} exact='true' className='portfolio-button' to="/portfolio" >
               <FontAwesomeIcon icon={faCamera} color='#4d4d4e' />
           </NavLink>
       </nav>
    }       
    </div>
    )
}
export default NavBar