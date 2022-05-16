import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../assets/images/logo.png'
const Sidebar = () =>  (
     <div className='nav-bar'>
         <Link className='logo' to='/'>
             <img src={logo} alt="MainLogo"/>
        </Link> 
        <nav>
            <NavLink exact='true' activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='portfolio-link' to="/portfolio" >
                <FontAwesomeIcon icon={faCamera} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='contact-link' to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
  
        </nav>
        <ul>
            <li>
                <a 
                href='https://github.com/egrep6021ad' >
                    <GitHubIcon /> 
                </a>
            </li>
            <li>
                <a 
                href='https://github.com/egrep6021ad' >
                    <LinkedInIcon /> 
                </a>
            </li>
        </ul>
     </div>
)
export default Sidebar