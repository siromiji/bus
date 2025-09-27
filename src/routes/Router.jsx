
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App.jsx"
import BusStopList from "../components/BusStopList.jsx";
import Main from "../components/Main.jsx"
import MapPage from "../components/MapPage.jsx"
import BusList from "../components/BusList.jsx"
import BusListDetail from "../components/BusListDetail.jsx";
import BusStopDetail from "../components/BusStopListDetail.jsx";
const router = createBrowserRouter([
    {
        element: <App/>,
        children : [
            {
                path: '/',
                element:<Main/>
            },
            {
                path: '/busstop',
                element:<BusStopList/>
            },
            {
                path: '/mappage',
                element:<MapPage/>
            },
            {
                path: '/bus',
                element: <BusList/>
            },
            {
                path: '/busdetail/:routeId',
                element: <BusListDetail/>
            },
            {
                path: '/busstopdetail',
                element: <BusStopDetail/>
            },

        ]
    }
]);

function Router(){
    return <RouterProvider router={router}/>
}

export default Router;