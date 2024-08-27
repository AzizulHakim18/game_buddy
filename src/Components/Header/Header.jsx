import React, { useContext, useEffect, useState } from 'react';
import "./Header.css";
import { HiMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { ThemeContext } from '../../Context/ThemeContext';
const Header = () => {


    const [toggle, setToggle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("theme", theme);
    }, [])

    return (
        <div>
            <div className="navbar bg-slate-200 ">
                <div className="flex-1">
                    <a className="text-xl md:text-3xl lg:text-5xl text-rose-600 font-bold jersey">Game Buddy</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div>
                        {theme == "light" ? <a className='text-4xl text-black bg-white' onClick={() => { setTheme("dark"); localStorage.setItem('theme', 'dark') }}><HiMiniSun /></a> :
                            <a className='text-4xl 	 bg-black ' onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}><HiMoon /></a>}
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="cursor-pointer menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* <li>
                                {theme == "light" ? <a className='text-4xl text-black bg-white' onClick={() => { setTheme("dark"); localStorage.setItem('theme', 'dark') }}><HiMiniSun /></a> :
                                    <a className='text-4xl text-zinc-50	 bg-black' onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}><HiMoon /></a>}

                            </li> */}
                            <li><a>Logout</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;