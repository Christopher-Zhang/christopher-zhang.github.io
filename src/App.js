
import './App.css';
import SortingVisualizerPage from './Pages/SortingVisualizerPage';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { Link, Route, Switch, HashRouter} from "react-router-dom";

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
      <Navbar />
      <Switch>
        <Route 
          exact 
          path={'/'} 
          component={HomePage}
        ></Route>
        <Route 
          exact 
          path={'/about'}
          component={About}
          ></Route>
        <Route 
          exact 
          path={"/projects/sorting-visualizer"}
          component={SortingVisualizerPage}
          ></Route>
      </Switch>
    </div>
  );
}

export default App;
