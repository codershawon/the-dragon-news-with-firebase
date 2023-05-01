import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../Pages/Home/Login/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import TermsConditions from "../Pages/Shared/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path:"/",
        element:<Navigate to={"/category/0"}></Navigate>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/termsConditions",
        element:<TermsConditions></TermsConditions>
      }
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element:<PrivateRoutes> <News></News></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
export default router;
