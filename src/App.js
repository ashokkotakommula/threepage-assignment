import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CopyToClipboard from './pages/copyToClipboard/CopyToClipboard';
import SelfiePage from './pages/selfiePage/SelfiePage';
import Home from './pages/home/HomePage';
import ApiVisualizatoin from './pages/apiVisualization/ApiVisualizatoin';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/visualization"><ApiVisualizatoin /></Route>
          <Route path="/copytoclipboard"><CopyToClipboard /> </Route>
          <Route path="/selfie"><SelfiePage /></Route>
        </Switch>
    </Router>
  );
}

export default App;
