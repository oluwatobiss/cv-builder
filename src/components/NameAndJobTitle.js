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

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}});
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], showInputEle: false}});
    }

    handleDoubleClick = (e) => {
        const {className} = e.target;
        this.setState({[className]: {...this.state[className], showInputEle: true}});
    }

    render() {
        return (
            <div id="name-and-job-title-div">
                <ElementMaker name="fullName"
                    mutableTagType="input"
                    type="text"
                    staticTagType="p"
                    text={this.state.fullName.text}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    handleDoubleClick={this.handleDoubleClick}
                    showInputEle={this.state.fullName.showInputEle}
                />
                <ElementMaker name="jobTitle"
                    mutableTagType="input"
                    type="text"
                    staticTagType="p"
                    text={this.state.jobTitle.text}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    handleDoubleClick={this.handleDoubleClick}
                    showInputEle={this.state.jobTitle.showInputEle}
                />
            </div>
        )
    }
}

export default NameAndJobTitle;