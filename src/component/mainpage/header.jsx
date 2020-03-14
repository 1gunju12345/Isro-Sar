import React from 'react';
import '../mainpage/header.css';
const Header=()=>{
    return(
        <div className='header'>
            <div className='left-text'>
                <h3>THE GOVERNMENT OF INDIA</h3>
            </div>
            <div className='left-content'>   
                <img src='\images\isro.png' alt='image'/>
            </div>
            <div className='middle-content'>
            <img src ='\images\coat_arms_india_PNG12.png' alt='image2'/>
            </div>

        </div>
    );
}
export default Header;