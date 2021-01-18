
import './App.css';
import SortingVisualizerPage from './Pages/SortingVisualizerPage';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import { Link, Route, Switch, HashRouter} from "react-router-dom";

const About = () =>(
  <div className="p-5">
    <h2>This page is under construction.</h2>
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
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
