import React from 'react';
import './web.css'

function Web() {
  return (
    <div className='web'> 
      <div className='web-option'>
        <a href='#project'>
          <i className="fi fi-rr-edit-alt option-icon"></i>Projects 
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills'>
          <i className="fi fi-rr-laptop option-icon"></i>Skill 
        </a>
      </div>
      <div className='web-option'>
        <a href='#education'>
          <i className="fi fi-rr-book option-icon"></i>Education 
        </a>
      </div>
      <div className='web-option'>
        <a href='#work'>
          <i className="fi fi-rr-briefcase option-icon"></i>Work 
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact'>
          <i className="fi fi-rr-headset option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
