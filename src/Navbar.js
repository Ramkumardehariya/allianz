import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";
import avtar from "./images/avtar.png"
import unfluke from "./images/unfluke.png"

const Navbar = () => {
  return (
    <div className='flex items-center justify-center mt-12'>
        <div className='w-[1280px]'>
        {/* upper part */}
           <div className='flex flex-row justify-between'>
                <div className='w-32'>
                    <img alt='unflueke' src={unfluke} />
                </div>

                <div className='flex flex-row gap-6 h-[25px]'>
                    <div className='flex flex-row gap-2'>
                      <img alt='bell' width={25}  src='https://www.freeiconspng.com/uploads/bell-icon-8.png'/>
                       <VscTriangleDown />
                    </div>

                    <div className='flex flex-row gap-2'>
                        <img width={25}  alt='200' src='https://freepngimg.com/save/87550-material-warriors-symbol-coins-game-fishing/512x512'/>
                        <div>0</div>
                    </div>
                    <div className='flex flex-row gap-2' >
                        <img width={25} alt='antar' src={avtar}/>
                        <VscTriangleDown />
                    </div>
                </div>
            </div>

            <div className='my-4'>
               <hr/>
            </div>

            {/* bottom part */}
            <div className='flex flex-row justify-between my-10 text-blue-500 text-lg'>
               <button>
                  LeaderBoard
               </button>
               <button className='flex flex-row gap-2'>
                  <div>Historical Trading </div>
                  <div className='mt-2'>
                     <VscTriangleDown  />
                  </div>
               </button>
               <button>
                  Historical Chart
               </button>
               <button>
                  Scanners
               </button>
               <button>
                  Alerts
               </button>
               <button>
                  Basic Backtest
               </button>
               <button>
                  Advanced Backtest
               </button>
               <button>
                  Pricing
               </button>
               <button>
                  My Earnings
               </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar