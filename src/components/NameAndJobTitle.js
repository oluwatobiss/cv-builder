import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class NameAndJobTitle extends Component {
    constructor() {
        super();
        this.state = {
            fullName: {text: `${faker.name.firstName()} ${faker.name.lastName()}`, showInputEle: false},
            jobTitle: {text: faker.name.jobTitle(), showInputEle: false}
        };
    }

    handleEleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}});
    }

    handleEleBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], showInputEle: false}});
    }

    handleEleDoubleClick = (e) => {
        const {className} = e.target;
        this.setState({[className]: {...this.state[className], showInputEle: true}});
    }

    render() {
        return (
            <div id="name-and-job-title-div">
                <ElementMaker name="fullName"
                    mutableTagType="input"
                    type="text"
                    placeholder="Full Name"
                    staticTagType="p"
                    text={this.state.fullName.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.fullName.showInputEle}
                />
                <ElementMaker name="jobTitle"
                    mutableTagType="input"
                    type="text"
                    placeholder="Profession"
                    staticTagType="p"
                    text={this.state.jobTitle.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.jobTitle.showInputEle}
                />
            </div>
        )
    }
}

export default NameAndJobTitle;