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
            <div className="p-6 border-b flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Order #12345</h2>
                <p className="text-gray-600">{formatDate('2024-01-25')}</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Order item" className="w-full h-auto mb-4" />
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec velit ac risus consectetur sodales ut eu nulla. Donec commodo convallis ligula, vel aliquam mauris finibus sit amet.</p>
              
            </div>
            {/* Repeat this structure for each order */}
            {/* Another order item */}
            <div className="p-6 border-b flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Order #12346</h2>
                <p className="text-gray-600">{formatDate('2024-02-03')}</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Order item" className="w-full h-auto mb-4" />
              <p className="text-gray-600 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              
              <p className="text-gray-600 self-end">Total: $95</p>
            </div>
            {/* Repeat this structure for each order */}
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderHistoryPage;
  