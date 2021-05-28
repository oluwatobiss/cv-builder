import { Component } from "react";
import uniqid from "uniqid";
import ExperienceInfo from "./ExperienceInfo";

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            experienceInfoArray: [<ExperienceInfo key={uniqid()} />]
        }
    }

    handleBtnClick = () => {
        this.setState({
            experienceInfoArray: [...this.state.experienceInfoArray, <ExperienceInfo key={uniqid()} />]
        })
    }

    render() {
        return (
            <section id="experience-section">
                <header className="main-header">
                    <span>Experience</span>
                    <button className="header-btn" onClick={this.handleBtnClick}>Add Experience</button>
                </header>
                {this.state.experienceInfoArray}
            </section>
        )
    }
}

export default Experience;