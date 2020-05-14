import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "./components/Dasboard/dashboard"
import Login from "./components/Login/login"
import Register from "./components/Register/register"
import { Provider } from 'react-redux';
import { store } from "./Config/redux/redux"
import Home from "./components/PageApi/home"


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}/>
      </div>
      </Router>
      </Provider>
  );
}

export default App;
