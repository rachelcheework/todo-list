import React, { useState} from 'react';

const Strikethrough = ({text}) => {
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const handleToggle = () => {
    setIsStrikethrough(!isStrikethrough)
  }

  const textStyle = {
    textDecoration : isStrikethrough ? 'line-through' : 'none',
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };



  return (
    <div style={containerStyle} className='strikethrough'>
        <input
          type="checkbox"
          className='checkbox-input'
          checked={isStrikethrough}
          onChange={handleToggle}/>
        <p style={textStyle}>{text}</p>
    </div>
  );
};

export default Strikethrough;