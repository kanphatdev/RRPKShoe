const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  
  const OrderHistoryPage = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-8">Order History</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
            {/* Single order item */}
            <div className="p-6 border-b flex items-center">
              <img src="https://via.placeholder.com/150" alt="Order item" className="w-16 h-16 mr-4" />
              <div>
                <h2 className="text-xl font-bold">Order #12345</h2>
                <p className="text-gray-600">Date: {formatDate('2024-01-25')}</p>
                <p className="text-gray-600">Total: $120</p>
                <button className="bg-[#434242] text-white px-4 py-2 rounded mt-4">View Details</button>
              </div>
            </div>
            {/* Repeat this structure for each order */}
            {/* Another order item */}
            <div className="p-6 border-b flex items-center">
              <img src="https://via.placeholder.com/150" alt="Order item" className="w-16 h-16 mr-4" />
              <div>
                <h2 className="text-xl font-bold">Order #12346</h2>
                <p className="text-gray-600">Date: {formatDate('2024-02-03')}</p>
                <p className="text-gray-600">Total: $95</p>
                <button className="bg-[#434242] text-white px-4 py-2 rounded mt-4">View Details</button>
              </div>
            </div>
            {/* Repeat this structure for each order */}
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderHistoryPage;
  