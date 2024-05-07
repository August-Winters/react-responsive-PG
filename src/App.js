import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import News from "./pages/News"

const App = () => {
  return (
   <Router>
    <Navbar/>
        <main claassName="main-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/news" element={<News/>} />
            </Routes>
        </main>
   </Router>
  );
};

export default App;
