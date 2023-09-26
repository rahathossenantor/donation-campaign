import { NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png";

const Navbar = () => {
    const links = <>
        <NavLink to="/"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Home</a></li></NavLink>
        <NavLink to="/donations"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Donation</a></li></NavLink>
        <NavLink to="/statistics"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Statistics</a></li></NavLink>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 border">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl cursor-pointer"><img src={logo} alt="logo" className="w-40" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;