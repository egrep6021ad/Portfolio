import './index.scss'
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';

const Card =(props) => {
    return(
        <div className="second-container" style={{height:props.my_style}}>
        <h1> {props.title}</h1>
        <div className='card-body'>
        <iframe className='iframe-1' src={props.vid} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
         </div>
        <div className='card-buttons'>
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