import React from 'react'

const Product = () => {
  return (
    <div className="bg-slate-200 p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4\ w-[1080px]">
    <div className="col-span-1">
      <div className="grid grid-cols-2 gap-4">
        <img src="https://snkrtoday.com/wp-content/uploads/2021/05/Nike-ZoomX-Vaporfly-NEXT-2-CU4111-700-6.jpeg" alt="" className="object-contain rounded-lg shadow-md" />
      </div>
    </div>
    <div className="col-span-1">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-center text-2xl">Nike Women Air Force 1 Shadow</h1>
        <div className="flex justify-end items-end">
          <p className="text-red-500 text-lg">110฿</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product