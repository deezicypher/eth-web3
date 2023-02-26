import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from "../assets/images/logo.png"


const NavbarItems = ({title,classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps} navbar-item`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  return (
   <div className='w-full flex md:justify-center flex-row justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <img  src={logo} alt="logo" className="w-32 cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden  flex-row justify-between items-center  flex-initial">
         {
          ["Market", "Exchange", "Wallet"].map((item, index) => (
            <NavbarItems key={item + index} title={item} />
          ))
         }
      </ul>
   </div>
  )
}

export default Navbar