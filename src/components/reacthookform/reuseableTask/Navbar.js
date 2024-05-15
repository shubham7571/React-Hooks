import React, { useState } from 'react'
import LoginModal from './LoginModal';
import CommonTable from '../../commonComponent/commonTable/CommonTable';

function Navbar() {
    const[loginData,setLoginData]=useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    console.log("handleopen",handleOpen);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className='bg-blue-400 h-20' >
                <nav >
                    <ul className='flex justify-end gap-4 p-4 font-serif  text-white text-xl'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <button onClick={handleOpen}>
                            <li >Login</li>

                        </button>
                    </ul>
                </nav>
            </div>
            <div>
                {/* <CommonTable 
                dataResult
                /> */}
            </div>
            {
                open &&
                <LoginModal 
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                loginData={loginData}
                setLoginData={setLoginData}

                />
            }
        </div>
    )
}

export default Navbar