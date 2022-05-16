import './index.scss'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Card from './Card'

const Web = () => {
    const [state,setState] = useState(false)
    const handleClick =() => setState(!state)
    return(
     <div className="portfolio-container">
         {state ? 
            <div className='portfolio-showcase'>
                <Card title='title'
                vid='https://www.youtube.com/embed/OqcHoLWyyIw'/>
                <Card title='title' 
                vid='https://www.youtube.com/embed/nWTvXbQHwWs'
                my_style='70%'/>
                <Card title='title'
                vid='https://www.youtube.com/embed/yCd3CzGSte8'
                />
            </div>
         :
            <div className='portfolio-showcase'>
                <Card title='title'
                vid='https://www.youtube.com/embed/ziQSpuST6Es'/>
                <Card title='title' 
                vid='https://www.youtube.com/embed/8A-5gIW0-eI'
                my_style='70%'/>
                <Card title='title'
                vid='https://www.youtube.com/embed/J70HXl1KhWE'
                />
            </div>
        }
        <div className='arrows'>
        <div className='left-arrow'>
            <FontAwesomeIcon onClick={()=>{handleClick()}} className='active' icon={faArrowLeft} size='6x' />
        </div>
        <div className='right-arrow'>
            <FontAwesomeIcon onClick={()=>{handleClick()}}className='active' icon={faArrowRight} size='6x' />
        </div>
        </div>
    </div>
    )
}
export default Web
