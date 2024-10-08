import React from 'react'
import menus from "../assets/menus.png";


import DrawerComponent from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

const Drawer = () => {  
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>
                <img src={menus} className='h-18 w-8 object-cover' alt="" />
            </button>
            <DrawerComponent
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bg-red-500'
            >
                <div className="mt-4 md:mt-0 text-center   second-color font-bold md:font-semibold md:text-md gap-3">
                    <div className='mb-1'><h1 className='bg-[#40377D] mt-3 px-3 md:py-1 rounded-3xl text-[#E6E6FA]'>Home</h1></div>
                    <div className='mb-1'><h1 className='bg-[#40377D] mt-3 px-5 md:py-1 rounded-3xl text-[#E6E6FA]'>Event</h1></div>
                    <div className='mb-1'><h1 className='bg-[#40377D] mt-3 px-5 md:py-1 rounded-3xl text-[#E6E6FA]'>About</h1></div>
                    <div className='mb-1'><h1 className='bg-[#40377D] mt-3 px-5 md:py-1 rounded-3xl text-[#E6E6FA]'>Contact</h1></div>
                </div>
            </DrawerComponent>
        </>
    )
}

export default Drawer;
