import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Instructors from "../AllPages/Instructors/Instructors";
import Classes from "../AllPages/Classes/Classes";
import Registration from "../AllPages/Registration/Registration";
import Login from "../AllPages/Login/Login";
import Page404 from "../AllPages/Page404/Page404";
import DashBoard from "../AllPages/DashBoard/DashBoard";
import MyClasses from "../AllPages/DashBoard/UsersDashboard/MyClasses";
import AllCourses from "../AllPages/DashBoard/AdminDashboard/AllCourses";
import AllUsers from "../AllPages/DashBoard/AdminDashboard/AllUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Registration></Registration>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'myclasses', 
          element: <MyClasses></MyClasses>
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        }
      ]
    },
    
    {
      path: '*',
      element: <Page404></Page404>
    }
  ]);

  export default router;