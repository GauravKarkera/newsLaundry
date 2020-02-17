import React, { Component } from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation"
import Stories from "./Components/Stories/Stories"
class App extends Component {

  
  render() {
    return (
     <>
     <Navigation/>
     <Stories/>
     </>
    );
  }
}

export default App;
