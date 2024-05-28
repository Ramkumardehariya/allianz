import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const LeaderBord = () => {
  return (
    <div className='flex items-center justify-center mt-12 mb-16'>
        <div className='w-[1280px]'>
          <div className='flex items-center justify-center mb-8'>
            <h1 className='font-bold text-5xl'>LeaderBoard</h1>
          </div>

          <div className='border-2 border-gray-200 rounded-md shadow-2xl'>
             <div className='px-6 py-6'>
              
                <div className='flex flex-row justify-between '>
                   <div className='font-bold text-3xl'>Basic Backtest </div>
                   <div className='flex flex-row border-2 border-red-200 shadow-2xl rounded-md'>
                      <div className='py-2 px-4 text-lg bg-amber-200'>Slippage</div>
                      <div className='w-[2px] bg-red-200'></div>
                      <div className='flex flex-row justify-between my-2 mx-4 gap-10'>
                         <div>0%</div>
                         <div className='mt-1'>
                           <IoIosArrowDropdown />
                         </div>
                      </div>
                   </div>
                </div>


                <table className='w-full h-full text-left mt-4'>
                   <thead className='text-lg'>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Calmar Ratio</th>
                      <th>Overal Profit</th>
                      <th>Avg. Daily Profit</th>
                      <th>Win %(Day)</th>
                      <th>price(Rs)</th>
                      <th>Action</th>
                   </thead>

                   <tbody>
                      <tr>
                        <td className='font-bold text-green-900'>1</td>
                        <td>Selling with re enter</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button >
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>2</td>
                        <td>Strategy_name</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>500</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>3</td>
                        <td>Based on premium and</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             Buy
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>4</td>
                        <td>strategy_name</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>5</td>
                        <td>strategy_name</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>6</td>
                        <td>Based on premium wit</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>7</td>
                        <td>strategy_name</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>8</td>
                        <td>wait and trade_Save</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>9</td>
                        <td>iron condor</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td>
                          <button className='text-blue-500'>
                             View
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className='font-bold text-green-900'>10</td>
                        <td>strategy_name</td>
                        <td>
                          <div>
                          </div>
                          <div>3.96</div>
                        </td>
                        <td>381845</td>
                        <td>319.54</td>
                        <td>0.65</td>
                        <td>-</td>
                        <td className='text-blue-500'>
                          <button>
                             View
                          </button>
                        </td>
                      </tr>
                      
                   </tbody>

                    
                </table>

             </div>
          </div>

            
        </div>
    </div>
  )
}

export default LeaderBord