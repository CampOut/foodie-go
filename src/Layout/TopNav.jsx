import React from 'react';
import Logo from '../assets/basic-icons/Logo.svg';
import DeliveryOptions from './components/DeliveryOptions';
import Location from './components/Location';
import ShoppingCart from './components/ShoppingCart';

const TopNav = () => {
  return (
    <header className='top-nav' data-test='top-nav'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='row'>
              <div className='col'>
                <img data-test='logo' className='logo' src={Logo} alt='Logo' />
              </div>
              <div className='col d-flex justify-content-end'>
                <div className='nav-inner-wrapper'>
                  <DeliveryOptions />
                </div>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='row'>
              <div className='col'>
                <Location />
              </div>
              <div className='col d-flex justify-content-end button-wrapper'>
                <ShoppingCart />
                <button data-test='signin-btn' className='secondary-btn'>Sign In</button>
                <button data-test='signup-btn' className='primary-btn'>Create account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
