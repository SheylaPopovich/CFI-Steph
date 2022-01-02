import "./App.css";
import Contact from "./components/Contact/Contact";
import Nav from "./components/NavBar/Nav";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="" component={} />
        <Route exact path="" component={} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
