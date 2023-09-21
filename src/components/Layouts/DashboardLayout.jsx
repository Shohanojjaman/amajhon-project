import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="container mx-auto max-sm:px-5 flex flex-col md:flex-row gap-6">
      <nav className="w-full md:w-[25%]">
        <ul className="menu bg-base-200  rounded-box">
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
      <div className=" bg-base-200 w-full rounded-box ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
