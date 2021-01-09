import './App.css';
import Home from "./components/home/Home";
import Register from './components/register/Register';
import Dashboard from "./components/dashboard/Dashboard";
import Outlay from "./components/outlay/Outlay";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from "./components/Context";
import Addmoney from "./components/money/Addmoney";
import PrivateRoute from "./components/privateRoute";

function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path={'/Register'} component={Register}/>
                        <PrivateRoute exact path={'/Outlay'} component={Outlay}/>
                        <PrivateRoute exact path={'/Addmoney'} component={Addmoney}/>
                        <PrivateRoute component={Dashboard} path="/dashboard" exact />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;