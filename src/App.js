
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllVideos from './components/AllVideos';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Videos/>}/>
           <Route path='/all-videos' element={<AllVideos/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
