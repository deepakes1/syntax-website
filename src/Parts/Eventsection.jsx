import React from 'react'
import Dropdown from '@/components/Dropdown'
import Dropdown2 from '@/components/Dropdown2'
import { Link } from 'react-router-dom'
function Eventsection() {
  return (
    <div className='flex flex-col justify-center gap-3 text-2xl  items-center h-[80vh] lg:h-[100vh]'>
      <Dropdown/>
      <Dropdown2/>
      <Link to= "/Hackathon" className='inline-flex font-bold justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg  text-gray-700 hover:bg-gray-50 focus:outline-none w-[200px]'>Hackathon</Link>
    </div>
  )
}

export default Eventsection
