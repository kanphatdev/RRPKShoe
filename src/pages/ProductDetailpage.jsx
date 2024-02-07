import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import ShoeCard from "../components/ShoeCard";
import ShoeSize from "../components/ShoeSize";
import Shoeview from "../components/Shoeview";
import { ShoeviewData } from "../data/Shoeviewdata";
import { nikeSizeShoeData } from "../data/SizeShoeData";

const ProductDetailpage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <ShoeCard />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ShoeviewData.map((shoe, i) => (
            <Shoeview key={i} shoe={shoe} />
          ))}
        </div>
      </div>

      <div className="mt-16 bg-slate-200 p-8 rounded-lg shadow-md">
        <h1 className="text-center text-2xl">Nike Women Air Force 1 Shadow</h1>
        <div className="flex justify-end items-end">
          <p className="text-red-500 text-lg">110฿</p>
        </div>
      </div>

      <div className="container mt-2">
        <h1 className="capitalize font-bold">size</h1>
        <div className="mt-3 flex flex-wrap">
          {nikeSizeShoeData.map(({ size, id }) => (
            <ShoeSize key={id} size={size} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <button type="button" className="mx-3 pt-3">
            <FaPlus />
          </button>
          <div className="px-3 py-2 bg-slate-200 button-theme">1</div>
          <button type="button" className="mx-3">
            <FaRegWindowMinimize />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-md max-w-md w-full">
          <button
            type="submit"
            className="bg-[#424343] uppercase text-white px-4 py-2 button-theme hover:bg-gray-600 w-full focus:outline-none focus:shadow-outline-blue active:bg-gray-800"
          >
            buy new
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailpage;
