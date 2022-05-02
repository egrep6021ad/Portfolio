import './index.scss'
import { Link } from 'react-router-dom'


const Home = () => {
    return(
        <div className="container home-page">
            <div className="home-text-zone"> 
                <h1>Software Solutions</h1> 
                <h3>...for the rest of us</h3>
                <h2>Your neighborhood Software Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
        </div>
    )
    }

export default Home
