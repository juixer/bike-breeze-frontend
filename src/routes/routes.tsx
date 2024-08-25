import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <div></div>,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])

export default router;