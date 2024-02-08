import React from 'react';

const OrderSummaryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 w-[1080px]">
       
        <div className="mb-8">
          <div className="grid gap-4">
            <div className="flex justify-between">
              <p className="text-gray-600">order date</p>
              <p className="text-gray-800">2024-02-08</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Quantity:</p>
              <p className="text-gray-800">1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Price:</p>
              <p className="text-gray-800">$110</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">shopping cost</p>
              <p className="text-gray-800">$110</p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default OrderSummaryPage;
