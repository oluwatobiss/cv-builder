import { Component } from "react";
import uniqid from "uniqid";
import EducationInfo from "./EducationInfo";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            educationInfoArray: [<EducationInfo key={uniqid()} />]
        }
    }

    handleBtnClick = () => {
        this.setState({
            educationInfoArray: [...this.state.educationInfoArray, <EducationInfo key={uniqid()} />]
        })
    }

    render() {
        return (
            <section id="education-section">
                <header className="main-header">
                    <span>Education</span>
                    <button className="header-btn" onClick={this.handleBtnClick}>Add Education</button>
                </header>
                {this.state.educationInfoArray}
            </section>
        )
    }
}

export default Education;