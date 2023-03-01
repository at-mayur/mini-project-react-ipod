import React from "react";

import './App.css';

// importing ipod component to render
import Ipod from "./ipod";

class App extends React.Component {
  render(){

    // rendering ipod within app div
    return (
      <div className="App">
        <Ipod />
      </div>
    );

  }
}

export default App;
