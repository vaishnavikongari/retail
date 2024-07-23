import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Signuph.css';

function Loginh() {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/login');
  };

  const handleAssociativeClick = () => {
    navigate('/Alogin');
  };

  return (
    <div className="login-page">
      <div className="signup-container">
        <h1 className="signup-title"> Login </h1>
        <button className="signup-button customer" onClick={handleCustomerClick}>
          Customer
        </button>
        <button className="signup-button associative" onClick={handleAssociativeClick}>
          Associative
        </button>
      </div>
    </div>
  );
}

export default Loginh;


