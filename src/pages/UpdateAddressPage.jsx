

const UpdateAddressPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4dede] to-[#efeded] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="my-3">
          <h1 className="text-2xl capitalize">address</h1>
        </div>
        <p className="badge capitalize">name</p> <span className="capitalize">k jam</span>
        <div className="my-2">
          <p className="badge capitalize">address</p> <span className="capitalize">123 Main Street</span>
        </div>
        <div className="my-2">
          <p className="badge capitalize">State</p> <span className="capitalize"> Fictional</span>
        </div>
        <div className="my-2">
          <p className="badge capitalize">city</p> <span className="capitalize"> Anytown</span>
        </div>
        <div className="my-2">
          <p className="badge capitalize">Zip Code</p> <span className="capitalize"> 98765</span>
        </div>
        <div className="flex flex-col md:flex-row items-end justify-end">
          <button type="button" className="capitalize mx-3 button-theme bg-[#424343] text-white mb-3 md:mb-0">edit</button>
          <button type="button" className="capitalize mx-3 button-theme bg-gradient-to-b from-[#e4dede] to-[#efeded] text-[#424343]">add</button>
        </div>
        <div className="my-5">
          <button
            type="submit"
            className="bg-[#424343] text-white px-4 py-2 capitalize button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAddressPage;
