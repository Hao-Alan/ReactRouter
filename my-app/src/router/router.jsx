import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import LayoutDemo from "../Layout/LayoutDemo";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/User";
import Setting from "../pages/Setting";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import DashStats from "../pages/DashStats";
import DashError from "../pages/DashError";
// import StatsLoader from "../loaders/statsLoader";
import statsLoader from "../loaders/statsLoader";
import Postxxx from "../pages/Postxxx";
import postLoader from "../loaders/postLoader";
import TodoList from "../TodoList/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "Home",
    element: (
      <LayoutDemo>
        <Home />
      </LayoutDemo>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    id: "about",
    element: (
      <LayoutDemo>
        <About />
      </LayoutDemo>
    ),
  },
  {
    path: "/contact",
    id: "contact",
    element: (
      <LayoutDemo>
        <Contact />
      </LayoutDemo>
    ),
  },
  {
    path: "/todoList",
    id: "todoList",
    element: (
      <LayoutDemo>
        <TodoList />
      </LayoutDemo>
    ),
  },
  {
    path: "/dashboard",
    id: "dashboard",
    element: <Dashboard />,
    children: [
      {
        errorElement: <DashError />,
        children: [
          { index: true, element: <DashStats />, loader: statsLoader },
          { path: "/dashboard/user", id: "DashboardUser", element: <User /> },
          {
            path: "/dashboard/setting",
            id: "DashboardSetting",
            element: <Setting />,
          },
          {
            path: "/dashboard/posts",
            id: "DashboardPosts",
            element: <Posts />,
            loader: statsLoader,
          },
          {
            path: "/dashboard/comment",
            id: "DashboardComment",
            element: <Comments />,
          },
          {
            path: "/dashboard/posts/:id",
            id: "Dashboard Post",
            element: <Postxxx />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);
