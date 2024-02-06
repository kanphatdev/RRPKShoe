import BottomNav from "../components/BottomNav"
import Navbar from "../components/Navbar"
import Carousel from "../components/PromoCarousel"
import PromoCarousel from "../components/PromoCarousel"



const Rootpage = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto p-4 ">
                <Carousel />



            </div>
            <BottomNav />
        </div>
    )
}

export default Rootpage