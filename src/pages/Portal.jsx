import Logo from '../assets/logo.jpg';
import Google from '../assets/Google.png';
import { FaFacebookF } from 'react-icons/fa';

const PortalPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4dede] to-[#efeded] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

        {/* Logo */}
        <div className="text-center mb-8">
          <img src={Logo} alt="Your Logo" className="mx-auto h-24" />
          {/* Adjust 'h-24' based on your logo's height */}
        </div>

        {/* Create Account Button */}
        <button className="px-4 py-2 bg-[#424343] text-slate-100 w-full mb-4 button-theme">
          Log In
        </button>

        {/* Log In Button */}
        <button className="text-white px-4 py-2 w-full hover:bg-gray-600 bg-[#424343] button-theme">
          Create Account
        </button>

        <div className="flex justify-center items-center my-3">
          <button type="button" className='btn btn-circle mx-3 hover:bg-gray-600 bg-[#316FF6]'>
            <FaFacebookF className='text-white' />
          </button>
          <button type="button" className='btn btn-circle mx-3 hover:bg-gray-600 bg-white p-2'>
            <img src={Google} alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;
