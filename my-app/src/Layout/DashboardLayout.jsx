import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts", path: "/dashboard/posts" },
  { name: "Comment", path: "/dashboard/comment" },
  { name: "Users", path: "/dashboard/user" },
  { name: "Settings", path: "/dashboard/setting" },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation().pathname;
  //   const { pathname } = useLocation();

  let activeStyle = {
    color: "blue",
    textDecoration: "none",
  };

  let otherStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      {/* header */}
      <div className="headerXX d-flex justify-content-between bg-dark py-2 ">
        <Link
          className="text-light"
          to={"/"}
          style={{
            textDecoration: "none",
            fontSize: "20px",
            // color: " #CB1C8D",
          }}
        >
          WEB SUPER VIP PRO
        </Link>
        <div>
          <button className="btn btn-primary me-4">Profile</button>
          <button className="btn btn-success">Logout</button>
        </div>
      </div>
      <div className="d-flex">
        {/* sidebar  */}
        <div
          style={{
            width: "15%",
            borderRight: "solid grey 1px",
            borderBottom: "solid grey 1px",
          }}
        >
          <ul className="d-flex flex-column text-start p-0">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.name}
                style={({ isActive }) =>
                  isActive && location === link.path ? activeStyle : otherStyle
                }
                className="text-start  fs-5 mt-1 "
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* Elements */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
