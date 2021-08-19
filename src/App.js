import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import News from './views/News'
import Network from './views/Network'

const App = () => {
  return ( 
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/network">
           <Network />
          </Route> 
        </Switch>
    </div>
  </Router>
   );
}
 
export default App;

