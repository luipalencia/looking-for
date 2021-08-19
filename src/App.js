import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import News from './views/News'
import Network from './views/Network'
import Photogram from './views/Photogram'
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
          <Route path="/photogram">
           <Photogram />
          </Route> 
        </Switch>
    </div>
  </Router>
   );
}
 
export default App;

