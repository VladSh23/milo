import React from 'react';

import './styles.scss'

export const Ps1: React.FC = () => {
  return (
    <span className='ps1'>
      <span className="text-green dark:text-dark-yellow">
        username
      </span>
      <span className="text-gray dark:text-dark-gray">@</span>
      <span className="text-green dark:text-dark-green">
        hostname
      </span>
      <span className="text-gray dark:text-dark-gray">:$ ~ </span>
    </span>
  );
};

export default Ps1;