
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Sorting from './components/Sorting/Sorting.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/sorting"element={<Sorting/>} />
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
