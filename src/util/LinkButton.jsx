// LinkButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const useLinkButton = (to) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return {
    handleClick,
  };
};

const LinkButton = ({ to, children }) => {
  const { handleClick } = useLinkButton(to);

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default LinkButton;