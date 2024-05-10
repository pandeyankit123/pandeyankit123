import React from 'react';
import './mobile.css'

function Mobile({isOpen , setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#project'>
            <i className="fi fi-rr-edit-alt option-icon"></i>Projects 
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skills'>
            <i className="fi fi-rr-laptop option-icon"></i>Skill 
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#education'>
            <i className="fi fi-rr-book option-icon"></i>Education 
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#work'>
            <i className="fi fi-rr-briefcase option-icon"></i>Work 
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact'>
            <i className="fi fi-rr-headset option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
