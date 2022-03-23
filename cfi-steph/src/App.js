import "./App.css";
import Nav from "./components/NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      
    <LandingPage />
    <Router>
        <>
          <Routes>
            <Route exact path="/" element={ <Main /> }></Route>
           
          </Routes>
        </>
      </Router>
    
      <Nav />
     
    </div>


  );
}

export default App;
