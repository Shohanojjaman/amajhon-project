import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer max-md:justify-center items-center py-8 md:py-6 container mx-auto max-sm:px-5 max-md:gap-y-1">
      <aside className="items-center grid-flow-col">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Amajhon
        </Link>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
        <ul className="menu menu-horizontal px-1">
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
      </nav>
    </footer>
  );
};

export default Footer;
