import BottomNav from "../components/BottomNav"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Carousel from "../components/PromoCarousel"
import nikeProducts from "../data/nikeProducts"




const Rootpage = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto p-4 ">
                <Carousel />
   <div className="grid grid-cols-3 gap-4">
   {nikeProducts.map((product, i) => (
        <Card key={i} product={product} />
      ))}
   </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default Rootpage