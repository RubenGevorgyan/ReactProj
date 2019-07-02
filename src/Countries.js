import React, { Component } from "react";
class Countries extends Component{
  
    render(){
    return(
      <div>
        <script type="text/javascript" src="Countries_scripts.js"></script>
      <div id="main-container">
        <div id="flag-container">
          <img src="" alt=""/>
        </div>
        <div id="info-container">
          <select id="countries"></select>
          <p>Capital: <span id="capital"></span></p>
          <p>Dialing Code: <span id="dialing-code"></span></p>
          <p>Population: <span id="population"></span></p>
          <p>Currencies: <span id="currencies"></span></p>
          <p>Region: <span id="region"></span></p>
          <p>Subregion: <span id="subregion"></span></p>
        </div>
      </div>
      <script></script>
      <div id="map"></div>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk"/>
</div>
    )
    }
}

export default Countries