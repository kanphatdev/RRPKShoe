import { IoChevronBackOutline } from "react-icons/io5";

const CreateAccountPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4dede] to-[#efeded] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

        {/* Create Account Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 capitalize">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              type="submit"
              className="bg-[#424343] text-white px-4 py-2 button-theme w-full hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
            >
              Log In
            </button>
            <button className="btn btn-circle">
              <IoChevronBackOutline />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateAccountPage;





































