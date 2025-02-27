import { Fragment } from "react"
import pic from "../../assets/neuro.png"
import React from "react"
const Navbar = () => {
 return (
  <Fragment>

   <div>
    <nav className="flex justify-between px-4 bg-gray-200">
     <div className="w-20 h-20  ">
      <img src={pic} alt="" className="h-full w-full rounded-full" />
     </div>
     <ul className="w-[50%] flex justify-evenly items-center">
      <li className="text-blue-800 font-medium hover:cursor-pointer">Home </li>
      <li className="text-blue-800 font-medium hover:cursor-pointer">About</li>
      <li className="text-blue-800 font-medium hover:cursor-pointer">Timing</li>
      <li className="text-blue-800 font-medium hover:cursor-pointer">Gallary</li>
      <li className="text-blue-800 font-medium hover:cursor-pointer">contact</li>
     </ul>
    </nav>
   </div>
  </Fragment>
 )
}
export default Navbar