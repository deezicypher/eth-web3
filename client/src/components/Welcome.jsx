import {AiFillPlayCircle} from "react-icons/ai";
import {FaEthereum} from "react-icons/fa";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {Loader} from "./";


const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-start md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start flex-col md:mr-10">
            <h1 className=" text-3xl sm:text-5xl text-gradient py-1">
                Peer to Peer Crypto <br/>
                Accross the World
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
               Send crypto to your family and friends easily on xpeer
            </p>
            <button type="button" onClick={() => connectWallet()} className="flex felx-row justify-center items-center my-5 cursor-pointer bg-[#2952e3] p-3 rounded-full hover:bg-[#2546bd] text-white">Connect</button>
          </div>
      </div>
    </div>
  )
}

export default Welcome