import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Email extends Component {
    constructor() {
        super();
        this.state = {
            myContactEmail: {text: faker.internet.email(), showInputEle: false},
        }
    }

    handleEleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: {...this.state[name], text: value}})
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
            <div>
                <p className="subHeader">Email</p>
                <ElementMaker name="myContactEmail"
                    mutableTagType="input"
                    type="email"
                    staticTagType="p"
                    text={this.state.myContactEmail.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.myContactEmail.showInputEle}
                />
            </div>
        )
    }
}

export default Email;