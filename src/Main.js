import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Countries from "./Countries";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><NavLink to="/Countries">Countries</NavLink></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/Countries" component={Countries} />
        </div>
        <div id="map"></div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB77LetPF3xdzGGXXIjXXK1V0POhtHUbWQ&callback=initMap" async defer></script>
      </HashRouter>
    );
  }
}

export default Main;