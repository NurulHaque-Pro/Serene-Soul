import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Instructors from "../AllPages/Instructors/Instructors";
import Registration from "../AllPages/Registration/Registration";
import Login from "../AllPages/Login/Login";
import Page404 from "../AllPages/Page404/Page404";
import DashBoard from "../AllPages/DashBoard/DashBoard";
import MyClasses from "../AllPages/DashBoard/UsersDashboard/MyClasses";
import AllCourses from "../AllPages/DashBoard/AdminDashboard/AllCourses";
import AllUsers from "../AllPages/DashBoard/AdminDashboard/AllUsers";
import UserDashboard from "../AllPages/DashBoard/UsersDashboard/UserDashboard";
import AdminDashboard from "../AllPages/DashBoard/AdminDashboard/AdminDashboard";
import PrivetRoute from "./PrivetRoute";
import AllClasses from "../AllPages/Classes/AllClasses";
import AddClass from "../AllPages/DashBoard/TeachersDashboard/AddClass";
import TeachersDashboard from "../AllPages/DashBoard/TeachersDashboard/TeachersDashboard";
import TeachersClasses from "../AllPages/DashBoard/TeachersDashboard/TeachersClasses";

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
        element: <AllClasses></AllClasses>
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
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children: [
      {
        path: 'userdashboard',
        element: <UserDashboard></UserDashboard>
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'admindashboard',
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'allclasses',
        element: <AllCourses></AllCourses>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'teacherdashboard',
        element: <TeachersDashboard></TeachersDashboard>
      },
      {
        path: 'teachersclasses',
        element: <TeachersClasses></TeachersClasses>
      },
    ]
  },

  {
    path: '*',
    element: <Page404></Page404>
  }
]);

export default router;