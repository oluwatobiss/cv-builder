import React, { Component } from "react";
import faker from "faker";

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
                {
                    this.state.fullName.showInputEle ?
                    <input type="text" className="fullName" name="fullName" value={this.state.fullName.text} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus /> :
                    <p className="fullName" onDoubleClick={this.handleDoubleClick}>{this.state.fullName.text}</p>
                }

                {
                    this.state.jobTitle.showInputEle ?
                    <input type="text" className="jobTitle" name="jobTitle" value={this.state.jobTitle.text} onChange={this.handleChange} onBlur={this.handleBlur} autoFocus /> :
                    <p className="jobTitle" onDoubleClick={this.handleDoubleClick}>{this.state.jobTitle.text}</p>
                }
            </div>
        )
    }

}

export default NameAndJobTitle;