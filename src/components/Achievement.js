import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Achievement extends Component {
    constructor() {
        super();
        this.state = {
            myAchievement: {text: faker.lorem.sentence(), showInputEle: false},
        }
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
            <ElementMaker name="myAchievement"
                mutableTagType="input"
                type="text"
                staticTagType="li"
                text={this.state.myAchievement.text}
                handleEleChange={this.handleEleChange}
                handleEleBlur={this.handleEleBlur}
                handleEleDoubleClick={this.handleEleDoubleClick}
                showInputEle={this.state.myAchievement.showInputEle}
            />
        )
    }
}

export default Achievement;