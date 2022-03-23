import "./App.css";
import Nav from "./components/NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
// import Homepage from "./components/HomePage/Homepage";



function App() {
  return (
    <div className="App">
      
   
    <Router>
        <>
        
      <Nav />
          <Routes>
            <Route exact path="/" element={ <LandingPage /> }>


            </Route>
           
          </Routes>
        </>
      </Router>
    
    
     
    </div>


  );
}

export default App;
