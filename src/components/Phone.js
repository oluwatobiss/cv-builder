import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Phone extends Component {
    constructor() {
        super();
        this.state = {
            myContactTel: {text: faker.phone.phoneNumber(), showInputEle: false},
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
                <p className="subHeader">Phone</p>
                <ElementMaker name="myContactTel"
                    mutableTagType="input"
                    type="tel"
                    staticTagType="p"
                    text={this.state.myContactTel.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.myContactTel.showInputEle}
                />
            </div>
        )
    }
}

export default Phone;