import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from "../assets/images/xpeer.png"
import { useState } from 'react'

const NavbarItems = ({title,classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps} navbar-item`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggle] = useState(false);

  return (
   <div className='w-full flex md:justify-center flex-row justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <img  src={logo} alt="logo" className="w-10 cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden justify-between items-center  flex-initial">
         {
          ["Market", "Exchange", "Wallet"].map((item, index) => (
            <NavbarItems key={item + index} title={item} />
          ))
         }
         <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover-[#25423d]'>
          Login
         </li>
      </ul>
      <div className='flex relative'>
        {!toggleMenu &&
      <AiOutlineMenu fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggle(!toggleMenu)}/>  
      }
      {toggleMenu && (
        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
          <li className="text-xl w-full my-2">
          <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() =>  setToggle(!toggleMenu)} />
          </li>
          {
          ["Market", "Exchange", "Wallet"].map((item, index) => (
            <NavbarItems key={item + index} title={item} classProps=" my-2 text-lg" />
          ))
         }
        </ul>

      )}
      </div>
   </div>
  )
}

export default Navbar