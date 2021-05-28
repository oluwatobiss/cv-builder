import { Component } from "react";
import ExperienceInfo from "./ExperienceInfo";
import uniqid from "uniqid";

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