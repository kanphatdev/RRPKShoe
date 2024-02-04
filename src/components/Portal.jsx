import Logo from '../assets/logo.jpg'
import Google from '../assets/Google.png'
import {FaFacebookF} from 'react-icons/fa'
const PortalPage = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

        {/* Logo */}
        <div className="text-center mb-8">
          <img src={Logo} alt="Your Logo" className="mx-auto h-24" />
          {/* Adjust 'h-12' based on your logo's height */}
        </div>

        {/* Create Account Button */}
        <button className=" px-4 py-2 bg-slate-900 text-slate-100 w-full mb-4 button-theme">
          Log In
        </button>

        {/* Log In Button */}
        <button className=" text-white px-4 py-2  w-full hover:bg-gray-600 bg-gray-800 button-theme">
          Create Account
        </button>
        <div className="flex justify-center items-center my-3">
          <button type="button" className='btn btn-circle mx-3 hover:bg-gray-600 bg-[#316FF6]'>
            <FaFacebookF className='text-white'/>
          </button>
          <button type="button" className='btn btn-circle mx-3 hover:bg-gray-600 bg-white p6'>
            <img src={Google} alt="" className="w-[24px] h-[24px] bg-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;
