import './index.scss'

const Web = () => {
    return(
        <div className='contact-container'>
            <div className='left'>
                <h1>Contact</h1>
       
                <div className='input-form'>
                <input className='input-begin' placeholder='Name'></input>
                <input className='input-begin' placeholder='Email'></input>
                </div>
                <input className='input-subject' placeholder='Subject'></input>
                <textarea className='input-body' placeholder='Mesage'></textarea>
                <button className='flat-button' >SEND</button>
             
            </div>

            <div className='right'>

            </div>
           </div>


    )
}
export default Web