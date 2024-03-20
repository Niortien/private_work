import React from 'react';
import img1 from '../Images/video_2023-11-15_06-01-49.mp4'

const Bgvideo = () => {
    return (
        <div>
            <div className='sombre'></div>
             <video src={img1}  autoPlay loop muted />
             <div className='Message'>
             <h1>Bienvenue sur mon site </h1>
             </div>
        </div>
    );
}

export default Bgvideo;
