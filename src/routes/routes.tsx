import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/layouts/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        // errorElement: <div></div>,
        // children:[
        //     {},
        // ]
    }
])

export default router;