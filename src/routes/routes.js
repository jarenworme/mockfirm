import {useRoutes} from "react-router-dom";

import Booking from "../pages/booking";
import LandingPage from '../pages/landingpage'
import MoreInfo from "../pages/moreinfo";
import PublishReview from "../pages/publishreview";
import Reviews from "../pages/reviews";


export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                {path: '/', element: <LandingPage />},
                {path: '/booking', element: <Booking />},
                {path: '/moreinfo', element: <MoreInfo />},
                {path: '/publishreview', element: <PublishReview />},
                {path: '/reviews', element: <Reviews />},
            ]
        },
    ]);
}
