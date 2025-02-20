import React, { useState } from 'react';
import * as motion from 'motion/react-client';


const DeliveryOptions = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  const toggleSwitch = () => setIsDelivery(!isDelivery);
  return (
    <div className='delivery-options-wrapper' data-test='delivery-options'>
      <button
        className='toggle-container'
        style={{
          justifyContent: 'flex-' + (isDelivery ? 'start' : 'end'),
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className='toggle-handle'
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
        <div className='options-container'>
          <span className='option left-option'>
            <i className={['icon-delivery-icon toggle-icon', `${isDelivery ? 'toggle-on': 'toggle-off'}`].join(' ')} />  Delivery
          </span>
          <span className='option right-option'>
            <i className={['icon-pickup-icon', 'toggle-icon', `${isDelivery ? 'toggle-off': 'toggle-on'}`].join(' ')} />
            Pickup
          </span>
        </div>
      </button>
    </div>
  );
};



export default DeliveryOptions;
