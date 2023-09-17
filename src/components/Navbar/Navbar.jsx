// import React from 'react';
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    

    const routes = [
        {id:1,name:'Home',path:'/'},
        {id:2,name:'About',path:'/about'},
        {id:3,name:'Services',path:'/services'},
        {id:4,name:'Contact',path:'/contact'},
        {id:5,name:'NotFound',path:'*'}];

    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross1 className="text-xl"></RxCross1> : <AiOutlineMenu className="text-xl"></AiOutlineMenu>
                }
                
            </div>
            
                
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-12' : '-top-60'} px-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;