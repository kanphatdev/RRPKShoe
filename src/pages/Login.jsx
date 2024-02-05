import Logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4dede] to-[#efeded] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

        {/* Logo */}
        <div className="text-center mb-8">
          <img src={Logo} alt="Your Logo" className="mx-auto h-24" />
          {/* Adjust 'h-24' based on your logo's height */}
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 badge">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 badge">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
            />
          </div>
          <Link to={'/home'}>

            <Link to={'/home'}
              className="text-white px-4 py-2 button-theme bg-slate-900 w-full hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Log In
            </Link  >
          </Link>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
