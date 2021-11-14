import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignup from './Components/LoginSignup';
import Checkin from './Components/Checkin';
import Inflight from './Components/Inflight'
import Header from './Components/Header'
import Home from './Components/Home';
import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles,IconButton} from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
 import'mdbreact/dist/css/mdb.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Box style={{marginTop:70}}>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
             <LoginSignup/> 
          </Route>
          <Route exact path="/checkin/:id">
             <Checkin /> 
          </Route>
          {/* <Route exact path="/inflight">
             <Inflight /> 
          </Route> */}
          <Route exact path= '/flight/:id' component={Inflight} />
          {/* <Route exact path= '/Passenger/:id' component={Inflight} /> */}
        </Switch>
        </Box>
      </Router>
     
    </div>
  );
}

export default App;
