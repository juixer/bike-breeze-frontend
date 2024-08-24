import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/layouts/Root";
import Home from "../pages/Home";

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
        ]
    }
])

export default router;