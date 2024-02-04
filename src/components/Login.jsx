import Logo from '../assets/logo.jpg'

const LoginPage = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

        {/* Logo */}
        <div className="text-center mb-8">
        <img src={Logo} alt="Your Logo" className="mx-auto h-24" />
          {/* Adjust 'h-16' based on your logo's height */}
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 badge">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 badge">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className=" text-white px-4 py-2 button-theme bg-slate-900 w-full hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
