import React from 'react'

const Adressbox = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <div className="my-3">
      <h1 className="text-2xl capitalize">address</h1>
    </div>
    <p className="badge capitalize">name</p> <span className="capitalize">k jam</span>
    <div className="my-2">
      <p className="badge capitalize">address</p> <span className="capitalize">123 Main Street</span>
    </div>
    <div className="my-2">
      <p className="badge capitalize">State</p> <span className="capitalize"> Fictional</span>
    </div>
    <div className="my-2">
      <p className="badge capitalize">city</p> <span className="capitalize"> Anytown</span>
    </div>
    <div className="my-2">
      <p className="badge capitalize">Zip Code</p> <span className="capitalize"> 98765</span>
    </div>
   
  </div>
  )
}

export default Adressbox