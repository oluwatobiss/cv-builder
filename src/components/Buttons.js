import { Component } from "react";

class Buttons extends Component {
    render() {
        return (
            <div id="buttons-div">
                <button onClick={() => window.print()}>Generate PDF</button>
                <button>Useful Articles</button>
            </div>
        )
    }
}

export default Buttons;