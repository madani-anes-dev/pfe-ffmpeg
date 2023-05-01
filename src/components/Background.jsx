import React from 'react';
import backgroundImage from '../assets/Background.svg';

const Background = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  };

  return <div style={styles}>Hello, world!</div>;
};

export default Background;
