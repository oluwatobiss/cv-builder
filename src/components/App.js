import { Component } from "react";
import AboutApp from "./AboutApp";
import CVPage from "./CVPage";
import Buttons from "./Buttons";


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="app-sections">
        <AboutApp />
        <CVPage />
        <Buttons />
      </div>
    );
  }
}

export default App;