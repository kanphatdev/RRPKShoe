import BottomNav from "../components/BottomNav"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import { nikeShoes } from "../data/ProductCarddata"



const Productpage = () => {
  return (
    <div className="">
    <Navbar />
    <div className="container mx-auto p-4 ">

<div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
{nikeShoes.map((shoe,i) => (
        <ProductCard key={i} shoe={shoe} />
      ))}
</div>


    </div>
    <BottomNav />
</div>
  )
}

export default Productpage