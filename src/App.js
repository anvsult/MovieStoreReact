import HomePage from './pages/HomePage';
import DirectorsPage from './pages/DirectorsPage';
import MoviesPage from './pages/MoviesPage';
import MyNavBar from "./MyNavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
        <Router>
            <MyNavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/directors' element={<DirectorsPage />} />
                <Route path='/movies' element={<MoviesPage />} />
            </Routes>
        </Router>
    )
}

