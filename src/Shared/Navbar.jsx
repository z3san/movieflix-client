import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
     const navOptions = (
        <>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-red-500' : 'default')}  to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-red-500' : 'default')}  to="/movies">Movies</NavLink></li>
          
          
        </>
      );
          

    return (
        <>
        <div className="navbar fixed z-10 bg-gray-700 bg-opacity-30 text-white max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52"
              >
                  {navOptions}
              </ul>
            </div>
            <a className=" cursor-pointer normal-case text-xl"><span className='text-red-500'>Movie<span className='text-yellow-500'>Flix</span> </span> </a>
          </div>
        
          <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
  
                  {navOptions}
            </ul>
          </div>
         
          </div>
        </div>
      </>
    );
};

export default Navbar;