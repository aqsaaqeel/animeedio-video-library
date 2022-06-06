import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import { ListingPage } from "./pages/listing-page/ListingPage"
import {Navbar} from "./components/Navbar/Navbar"
import { HomePage } from './pages/home page/HomePage'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element ={<HomePage />}/>
          <Route path = "/listing" element={<ListingPage/>}/>    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
