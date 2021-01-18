
import './App.css';
import SortingVisualizerPage from './Pages/SortingVisualizerPage';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { Link, Route, Switch } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const About = () =>(
  <div>
    <h2>About</h2>
  </div>
)

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <HomePage />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/about'}>
          <About />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/projects/sorting-visualizer"}>
          <SortingVisualizerPage></SortingVisualizerPage>
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
