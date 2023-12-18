import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Accounts from "../pages/Accounts/Accounts";
import Activities from "../pages/Activities/Activities";
import Dashboard from "../pages/Dashboard/Dashboard";
import Department from "../pages/Department/Department";
import Employee from "../pages/Employee/Employee";
import Events from "../pages/Events/Events";
import FileManager from "../pages/FileManager";
import Holidays from "../pages/Holidays/Holidays";
import Payroll from "../pages/Payroll/Payroll";
import Report from "../pages/Report/Report";
import Users from "../pages/Users/Users";
// import NotFound from "../Shared/NotFound/NotFound";
import Account from "../pages/Account";
import Contact from "../pages/Contact/Contact";
import Messenger from "../pages/Messenger";
import Search from "../pages/Search/Search";
import Settings from "../pages/Settings";
import Calender from "../pages/Calender/Calender";

const router = createBrowserRouter([
  // {
  //     path: "*",
  //     element: <NotFound />,
  // },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/department",
        element: <Department></Department>,
      },
      {
        path: "/employee",
        element: <Employee></Employee>,
      },
      {
        path: "/holiday",
        element: <Holidays></Holidays>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/payroll",
        element: <Payroll></Payroll>,
      },
      {
        path: "/acounts",
        element: <Accounts></Accounts>,
      },
      {
        path: "/report",
        element: <Report></Report>,
      },
      {
        path: "/activities",
        element: <Activities></Activities>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/file-manager",
        element: <FileManager />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/messenger",
        element: <Messenger />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
    ],
  },
]);

export default router;
