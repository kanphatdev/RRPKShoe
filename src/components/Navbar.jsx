
import { PiMagnifyingGlass } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center lg:flex justify-center items-center">
        <div className="flex items-center">
          <button type="button" className="btn btn-square bg-[#434242] ">
            <PiMagnifyingGlass className="text-[#efeded]" />
          </button>
          <input type="text" placeholder="Search Product" className="input input-ghost w-[301px] h-[45px] max-w-[301px] mx-3" />
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Navbar;
