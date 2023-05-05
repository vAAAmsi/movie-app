// import logo from './logo.svg';
// import './App.css';

import Screen1 from "./screens/screen1";
import Navbar from "./navbar";
import { Route, Routes } from "react-router";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Screen1/>}></Route>
        <Route path="/movie-details" element={<Screen2/>}></Route>
        <Route path="/bookings" element={<Screen3/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
