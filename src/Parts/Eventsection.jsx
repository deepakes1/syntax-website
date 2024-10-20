import React from 'react'
import Dropdown from '@/components/Dropdown'
import Dropdown2 from '@/components/Dropdown2'
function Eventsection() {
  return (
    <div className='flex flex-col justify-center gap-3 text-2xl font-bold items-center h-[80vh]'>
      <Dropdown/>
      <Dropdown2/>
    </div>
  )
}

export default Eventsection
