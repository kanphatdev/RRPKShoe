import  { useState } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

const BottomNav = () => {
  const [activeButton, setActiveButton] = useState('home'); // Default active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // You can perform additional actions when a button is clicked if needed
  };

  return (
    <div className="btm-nav">
      <button
        className={activeButton === 'home' ? 'active' : 'bg-gradient-to-b from-[#e4dede] to-[#efeded] text-[#434242]'}
        onClick={() => handleButtonClick('home')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="btm-nav-label">Home</span>
      </button>
      <button
        className={activeButton === 'product' ? 'active' : 'bg-gradient-to-b from-[#e4dede] to-[#efeded] text-[#434242]'}
        onClick={() => handleButtonClick('product')}
      >
        <IoBagHandleOutline />
        <span className="btm-nav-label capitalize">Product</span>
      </button>
      <button
        className={activeButton === 'profile' ? 'active' : 'bg-gradient-to-b from-[#e4dede] to-[#efeded] text-[#434242] '}
        onClick={() => handleButtonClick('profile')}
      >
        <FaRegUser />
        <span className="btm-nav-label capitalize">My Profile</span>
      </button>
    </div>
  );
};

export default BottomNav;
