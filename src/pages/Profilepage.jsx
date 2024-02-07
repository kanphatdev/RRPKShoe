import BottomNav from "../components/BottomNav";
import ProfileNav from "../components/ProfileNav";

const Profilepage = () => {
  return (
    <>
      <ProfileNav />
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <button
            type="button"
            className="bg-[#424343] capitalize text-white px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
          >
            edit address
          </button>
          <div className="space-y-4 my-4">
            <button
              type="button"
              className="bg-[#424343] capitalize text-white px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
            >
              edit password
            </button>
          </div>
          <div className="space-y-4 my-4">
            <button
              type="button"
              className="bg-[#424343] capitalize text-white px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
            >
              order history
            </button>
          </div>
          <div className="mt-16">
            <button
              type="button"
              className="bg-gradient-to-b from-[#e4dede] to-[#efeded] capitalize text-[#424343] px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
            >
              order history
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Profilepage;
