import React from 'react'
import DrawerComponent from 'react-modern-drawer'
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'

const Drawer = () => {  
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleLinkClick = () => {
        setIsOpen(false); // Close the drawer
    }

    return (
        <>
            <button onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
            <DrawerComponent
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                style={{ backgroundColor: "#40377D" }}
            >
                <div className="mt-4 md:mt-0 text-center flex flex-col items-center justify-center h-[90vh] second-color font-bold md:font-semibold md:text-md gap-6">
                    <div className='mb-1'>
                        <Link to="/" className='text-[#40377D] mt-5 px-4 py-2 md:py-2 rounded-tl-3xl rounded-br-3xl mx-auto bg-[#E6E6FA]' onClick={handleLinkClick}>Home</Link>
                    </div>
                    <div className='mb-1'>
                        <Link to="/events" className='text-[#40377D] mt-5 px-4 py-2 md:py-1 rounded-tl-3xl rounded-br-3xl mx-auto bg-[#E6E6FA]' onClick={handleLinkClick}>Events</Link>
                    </div>
                    <div className='mb-1'>
                        <Link to="/About" className='text-[#40377D] mt-5 px-4 py-2 md:py-1 rounded-tl-3xl rounded-br-3xl mx-auto bg-[#E6E6FA]' onClick={handleLinkClick}>About</Link>
                    </div>
                    <div className='mb-1'>
                        <Link to="/contact" className='text-[#40377D] mt-5 px-4 py-2 md:py-1 rounded-tl-3xl rounded-br-3xl mx-auto bg-[#E6E6FA]' onClick={handleLinkClick}>Contact</Link>
                    </div>
                </div>
            </DrawerComponent>
        </>
    )
}

export default Drawer;