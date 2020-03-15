import React from 'react';
import '../mainpage/header.css';
import logo1 from '../mainpage/images/isro.png';
import logo2 from '../mainpage/images/coat_arms_india_PNG12.png';
import logo3 from '../mainpage/images/mahatma_gandhi_150.png';
const Header=()=>{
    return(
        <div className='header'>
            <div className='left-text'>
                <h3>THE GOVERNMENT OF INDIA</h3>
                
                <div>
                <img src={logo3} height='150px' alt ='image3'/>
            </div>
            </div>
            <div className='middle-content'>   
            <img src ={logo2} height ='150px' alt='image2'/>
            </div>
    
            <div className='right-content'>
            <img src={logo1} height ='150px' alt='image'/>
            </div>
        <div className='right-text'>
        <h3>Department of Space, Indian Space Research Organisation</h3>
        </div>
        </div>
    );
}
export default Header;