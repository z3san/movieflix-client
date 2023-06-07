import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import MovieDetails from "../MovieDetails/Moviedetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/',
            element: <Home></Home>

            },
            {
                path: '/movies/:id',
                element: <MovieDetails></MovieDetails>

            }
        ]

    }
])