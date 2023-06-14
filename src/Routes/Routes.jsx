import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home";
import Instructors from "../AllPages/Instructors/Instructors";
import Classes from "../AllPages/Classes/Classes";

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
        }
      ]
    },
  ]);

  export default router;