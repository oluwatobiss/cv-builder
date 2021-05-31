import { Component } from "react";
import AboutApp from "./AboutApp";
import CVPage from "./CVPage";
import OffPageButtons from "./OffPageButtons";


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
        <OffPageButtons />
      </div>
    );
  }
}

export default App;