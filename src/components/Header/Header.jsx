import { Link, NavLink } from 'react-router-dom';
import '../../index.css';

const Header = () => {
  return (
    <header className="container mx-auto navbar bg-base-100 justify-between">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Amajhon
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-gray-400' : '')}>
                Home
              </NavLink>

              <Link className="text-lg" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
                }>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
                }>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
