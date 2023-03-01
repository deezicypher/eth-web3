import {AiFillPlayCircle} from "react-icons/ai";
import {FaEthereum} from "react-icons/fa";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {Loader} from "./";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const commonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange }) => (
  <input 
  placeholder={placeholder} 
  name={name}
  type={type}
  step="0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-xl p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
  />
)



const Welcome = () => {

  const {connectWallet, currentAccount,sendTransaction, formData, handleChange} = useContext(TransactionContext)

  const handleSubmit = e => {
    const {addressTo, amount, message} = formData;
    e.preventDefault();

    if(!addressTo || !amount || !message) return;
  
    sendTransaction();
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-start m:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start flex-col md:mr-10">
            <h1 className=" text-3xl sm:text-5xl text-gradient py-1">
                Peer to Peer Crypto <br/>
                Accross the World
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
               Send crypto to your family and friends easily on xpeerz
            </p>
            {!currentAccount && 
            <button type="button" onClick={() => connectWallet()} className="flex felx-row justify-center items-center my-5 cursor-pointer bg-[#2952e3] p-3 rounded-full hover:bg-[#2546bd] ]">
              <p className="text-white text-base font-semi-bold">  Connect Wallet </p></button>
}
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${commonStyle} `}>
                  Realiabilty
              </div>
              <div className={` ${commonStyle}`}>
                  Security
              </div>
              <div className={`rounded-tr-2xl ${commonStyle} `}>
                  Ethereum
              </div>
              <div className={`rounded-bl-2xl ${commonStyle} `}>
                  Web 3.0
              </div>
              <div className={` ${commonStyle}`}>
                  Low Fees
              </div>
              <div className={`rounded-br-2xl ${commonStyle} `}>
                  Blockchain
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
              <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism eth-card">
                  <div className="flex justify-between flex-col w-full h-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                              <FaEthereum fontSize={25} color="#fff" />
                            </div>

                            <BsFillInfoCircleFill fontSize={17} color="#fff"/>
                            
                        </div>
                        <div>
                            <p className="text-white font-light text-sm">
                              Address
                            </p>
                            <p className="text-white font-semi-bold text-xl">
                              Ethereum
                            </p>
                        </div>
                  </div>
              </div>

              <div className="p-5 sm:w-96 w-full flex-col justify-start items-center blue-glassmorphism">
                  <Input placeholder="Receiver's Address" name="addressTo" type="text" handleChange={handleChange} />
                  <Input placeholder="Amount" type="text" name="amount" handleChange={handleChange} />
                  <Input placeholder="Message" type="text" name="message" handleChange={handleChange} />
                  <div className="h-[1px] w-full bg-gray-400 my-2" />
               {false?
               <Loader/>
               :
              <button 
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
               }        
              </div>
          </div>
      </div>
    </div>
  )
}

export default Welcome