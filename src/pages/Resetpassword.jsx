const ResetPasswordPage = () => {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
  
          {/* Reset Password Form */}
          <form className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
  
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2 badge capitalize">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
              />
            </div>
  
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2 badge capitalize">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
              />
            </div>
  
            <button
              type="submit"
              className="bg-[#424343] text-white px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
            >
              Reset Password
            </button>
          </form>
  
        </div>
      </div>
    );
  };
  
  export default ResetPasswordPage;
  