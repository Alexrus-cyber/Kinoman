import React, {useState, Component} from "react";


export const GreenButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
 let basa = 1;
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
    // 👇️ or set to true
    // setIsActive(true);
  };
  return(
      <div onClick={handleClick} style={
        {
            fontSize: 10,
            color: '#b7b6b6',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          width: '20px',
          height: '20px',
          marginTop: '10px',
          marginRight: '5px',
          border: isActive ? '#3E4D9DFF' : '#1c501c',
          borderRadius: '20px',
          backgroundColor:  isActive ? '#3E4D9DFF' : '#1c501c',
          transition: 'background 0.2s ease',
        }
      }>{props.id}</div>
  );
}