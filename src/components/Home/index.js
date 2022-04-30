import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, ] = useState('text-animate')
    const softArray = ['S','o','f','t','w','a','r','e',' ']
    const solutionArray = ['S','o','l','u','t','i','o','n','s']
    const restArray = ['f','o','r',' ','t','h','e',' ','r','e','s','t',' ','o','f',' ','u','s']


    return(
        <div className="container home-page">
    
            <div className="text-zone"> 
            <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={softArray}
                idx={8} />
                <AnimatedLetters letterClass={letterClass}
                strArray={solutionArray}
                idx={9} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={restArray}
                idx={18} />
                </h1>
            <h2>Your neighborhood Software Engineer</h2>
            <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
        </div>
    )
    }

export default Home
