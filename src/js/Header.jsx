import React from 'react';
import { Link } from 'react-router-dom';
import LLMLogo from '../assets/LLMLogo.png'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <Link to="/">
              <img src={LLMLogo} alt="LLMLogo" width="100%" height="100%"/>
          </Link>
        </div>
      </div>
      <div className='header-bottom-line'>
      </div>
      </>
  )
}

export default Header