import React from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import './Video.css';

const videoConstraints = {
    width: 500,
    height: 400,
    facingMode: "user"
};
function Video() {
    return (
        <div className="position_webcam" style={{margin:'10px'}}>
            <div style={{textAlign:'center', margin:'15px', marginBottom:'15px', border:'2px solid black'}}>
                <h1>Renult Video Chat</h1>
            </div>
            <Webcam 
                audio={true}
                videoConstraints={videoConstraints}
                style={{marginLeft:'20px'}}
                
            />
            <Webcam
                audio={true}
                videoConstraints = {videoConstraints}
                style={{float:'right'}}
            />
            <br/>
            <br/>
            <div style={{display:'flex', justifyContent:'center'}}>
               <Link to='/feedback'><button>Feedback form</button></Link>
            </div>
        </div>
    )
}

export default Video
