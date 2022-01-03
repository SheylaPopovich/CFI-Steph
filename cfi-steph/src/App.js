import "./App.css";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage";
import { BrowserRouter as Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Route exact path="/login" component={LandingPage} />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
