import { CiCircleCheck } from "react-icons/ci";

const AlertOrdersuccess = () => {
  return (
   <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full flex flex-col justify-center items-center">
    <CiCircleCheck className="text-6xl text-emerald-500"/>
    <div className="mt-4">
        <h1 className="text-4xl text-center uppercase">order complete </h1>
    </div>
   </div>
  )
}

export default AlertOrdersuccess