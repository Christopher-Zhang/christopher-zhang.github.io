
import './App.css';
import SortingVisualizerPage from './Pages/SortingVisualizerPage';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import PokedexQuiz from './Pages/PokedexQuiz';
import ColordlePage from './Pages/Colordle';
import { Route, Switch} from "react-router-dom";

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
        <Route 
          exact 
          path={"/projects/pokedex-quiz"}
          component={PokedexQuiz}
          ></Route>
        <Route 
          exact 
          path={"/projects/colordle"}
          component={ColordlePage}
          ></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
