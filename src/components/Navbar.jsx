import {NavLink, Link} from 'react-router-dom'

const NavLinks = <>
    <li className='mr-4 font-semibold  '><NavLink className='' to="/">Home</NavLink></li>
    <li className='mr-4 font-semibold  '><NavLink className='' to="/booklist">Books List</NavLink></li>
    <li className='mr-4 font-semibold  '><NavLink className='' to="/wishlist">Pages to read</NavLink></li>
</>
function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Books Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavLink className='btn btn-primary mr-2' to="/path">
                        Sign In
                    </NavLink>
                    <NavLink to="/path" className='btn btn-secondary'>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
