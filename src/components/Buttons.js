import { Component } from "react";

class Buttons extends Component {
    render() {
        return (
            <div id="off-page-buttons-div">
                <button className="offPgBtn" onClick={() => window.print()}>Generate PDF</button>
                <button className="offPgBtn">Useful Articles</button>
            </div>
        )
    }
}

export default Buttons;