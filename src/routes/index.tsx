import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MoveDetail from '../pages/MovieDetail/MovieDetail';
import MyProfile from '../pages/MyProfile/MyProfile';

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie-detail/:id" element={<MoveDetail />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;