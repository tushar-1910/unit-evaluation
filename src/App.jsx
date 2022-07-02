import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bookings from './components/Bookings';
import Home from './components/Home';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/movies/:id' element={<MovieDetails />}></Route>
        <Route path='/bookings' element={<Bookings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
