import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/home-screen/home-screen"
import MyCollectionScreen from "./screens/my-collection-screen/my-collection-screen"
class App extends Component {
  componentDidMount() {
    localStorage.setItem('myCollection', JSON.stringify([]))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/home">
              <HomeScreen />
            </Route>
            <Route path="/my-collection">
              <MyCollectionScreen />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
export default App;
