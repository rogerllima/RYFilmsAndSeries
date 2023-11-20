import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MoveDetail from '../pages/MovieDetail/MovieDetail';

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie-detail/:id" element={<MoveDetail />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;