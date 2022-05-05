import './index.scss'
import headshot from '../../../assets/images/headshot.png'
const Web = () => {
    return(
        <div className='contact-container'>
            <div className='left'>
                <h1>Contact</h1>
       
                <div className='input-container'>
                <input className='name' placeholder='Name'></input>
                <input className='email' placeholder='Email'></input>
                </div>
                <input className='input-subject' placeholder='Subject'></input>
                <textarea className='input-body' placeholder='Mesage'></textarea>
                <button className='send-button' >SEND</button>
             
            </div>

            <div className='right'>
            <h1>Full-Stack <br />Developer</h1> 
            <img src={headshot} alt="avatar" /> 
                <p className='one'>lkndlknd dlkndlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlndd dddkjlkjlslldddklkndlkn dlkndlknd dlkndlkn sn dh lhld ddddklkndlkn dlkndlknd dlkndlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlndd dddkjlkjlsssn dh lhld ddddklkndlkn dlkndlknd dlkndlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlndd dddkjlkjlslldddklkndlkn dlkndlknd dlkndlkn sn dh lhld ddddklkndlkn dlkndlknd dlkndlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlndd dddkjlkjlslldddklkndlkn dlkndlknd dlkndlk dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlkn dlkndlknd dlkndlnddlndd dddkjlkjlsl</p>
            </div>
           </div>
           
           


    )
}
export default Web