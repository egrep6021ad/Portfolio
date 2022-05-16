import './index.scss'
import React, { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';
import { height } from '@mui/system';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import Card from './Card'
const Web = () => {
    const [state, setState] = useState(0)
    const [myBackground, setMyBackground] = useState('yellow')
    const handleEvent = e => {
        let element= e.target
        //console.log(element.scrollHeight )
        console.log(element.scrollTop )
        element.scrollTop > 10 ? setMyBackground('https://images.unsplash.com/photo-1652528250424-d2018d05158c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80') : setMyBackground('https://images.unsplash.com/photo-1652584067032-b47978f7b7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')
        //if(element.scrollHeight - element.scrollTop >= element.clientHeight)
         //   setState(state+1)
        //console.log(element.clientHeight)
        //console.log(state)
    } 
    useEffect(()=>{
        //window.addEventListener("resize",handleEvent)
        //console.log(state)
        //return ()=> {
          //  window.removeEventListener("resize",handleEvent)
       // }
    },[handleEvent])
    
    return(
     <div className="portfolio-container">
        <div className='portfolio-showcase'>
            <Card title='title'/>
            <Card title='title' style='70%'/>
            <Card title='title'/>
        </div>
        <div className='arrows'>
        <div className='left-arrow'>
            <FontAwesomeIcon className='active' icon={faArrowLeft} size='6x' />
        </div>
        <div className='right-arrow'>
            <FontAwesomeIcon className='active' icon={faArrowRight} size='6x' />
        </div>
        </div>
    </div>

    )
}
export default Web
/*
 <div className='text-area-portfolio' 
            style={{ backgroundImage: `url('${myBackground}')` }} 
            onScroll={handleEvent}>
*/