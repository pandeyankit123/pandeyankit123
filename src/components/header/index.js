import React, { useState } from 'react';
import "./header.css"
import Mobile from './mobile';
import Web from './web';

function Header() {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <div className='header'> 
      <div className='logo' style={{fontFamily:"cursive"}}>
      <img src={require("../../assets/nav.jpg")} style={{marginTop:"10px", borderRadius: "25px"}} width="35" height="35" className="d-inline-block align-top" alt=""/>
      &nbsp;Ankit Pandey
      </div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />  
        </div>
        <div className='mobile-menu'>
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );  
}

export default Header;
