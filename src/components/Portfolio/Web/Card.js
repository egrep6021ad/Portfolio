import './index.scss'
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
const Card =(props) => {
    return(
            <div className="second-container" style={{height:props.style}}>
            <h1> {props.title}</h1>
            <div className='card-body'>
            <iframe className='iframe-1' src="https://www.youtube.com/embed/qwfE7fSVaZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='card-buttons'>
                <Divider />
                <br />
                    <span> 
                    
                        <Button className='share-icon'><ShareIcon /></Button>
                        <Button className='learn-icon'>Click</Button>
                    </span>
                </div>
            </div>

       
    )
}
export default Card