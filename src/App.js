import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from "./components/dashboard";
import UserProvider from "./providers/UserProvider";


function App() {
  return (
      <UserProvider>
            <div className="App">
                <Router>
                    <Switch>
                        <Route component={LoginForm} exact={''} path={'/'} />
                        <Route component={Dashboard} path={'/dashboard'} />
                    </Switch>
                </Router>
            </div>
      </UserProvider>
  );
}

export default App;
