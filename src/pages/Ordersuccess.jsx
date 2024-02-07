import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for navigation

const OrderSuccessPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg mb-8">Thank you for your order. Your order has been successfully placed.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
