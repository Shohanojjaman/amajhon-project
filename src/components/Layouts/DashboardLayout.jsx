import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="container mx-auto max-sm:px-5 flex gap-6">
      <nav>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <NavLink
              to="/dashboard/home"
              className={({ isActive, isPending }) =>
                (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
              }>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive, isPending }) =>
                (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
              }>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/editProfile"
              className={({ isActive, isPending }) =>
                (isPending ? 'pending' : isActive ? 'active-btn lg:text-lg' : '') || `text-base lg:text-lg`
              }>
              Edit Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="min-h-screen bg-base-200 w-full rounded-box flex justify-center items-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
