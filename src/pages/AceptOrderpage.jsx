import Adressbox from '../components/Adressbox'
import OrderSummaryPage from '../components/Orderdetail'
import Product from '../components/Product'
import TotalPriceCard from '../components/TotalPriceCard'

const AceptOrderpage = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4dede] to-[#efeded] min-h-screen container mx-auto px-4">
      <div className="min-h-screen flex items-center justify-center flex-col">
        <Adressbox />
        <div className="mt-4 sm:w-full lg:w-3/4">
          <Product />
        </div>
        <div className="mt-4 sm:w-full lg:w-3/4">
          <OrderSummaryPage />
        </div>
        <div className="mt-4 sm:w-full lg:w-3/4">
          <TotalPriceCard />
        </div>
      </div>
    </div>
  )
}

export default AceptOrderpage
