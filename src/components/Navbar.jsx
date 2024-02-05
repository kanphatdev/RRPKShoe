
import { PiMagnifyingGlass } from "react-icons/pi";
const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
  
 
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="flex items-center justify-center">
    <button type="button" className="btn btn-square bg-[#434242] ">
    <PiMagnifyingGlass  className="text-[#efeded]"/>
    </button>
    <input type="text" placeholder="Seearch Product" className="input input-ghost w-[301px] h-[45px] max-w-[301px] mx-3" />
  </div>
  </div>
  <div className="navbar-end">
  
  </div>
</div>
  )
}

export default Navbar