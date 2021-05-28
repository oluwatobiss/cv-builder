import { Component } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

class Skills extends Component {
    constructor() {
        super();
        this.state = { 
            mySkill: {text: "React", readOnly: true},
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

    handleRateDoubleClick = (e) => {
        const {id} = e.currentTarget;
        this.setState({[id]: {...this.state[id], readOnly: false}});
    }
    handleRateBlur = (e) => {
        const {id} = e.currentTarget;
        this.setState({[id]: {...this.state[id], readOnly: true}});
    }

    render() {
        return (
            <article>
                <ElementMaker name="mySkill"
                    mutableTagType="input"
                    type="text"
                    staticTagType="p"
                    text={this.state.mySkill.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.mySkill.showInputEle}
                />
                <HoverRating hoverName="mySkill"
                    defaultRating={3.5} 
                    readOnly={this.state.mySkill.readOnly} 
                    handleRateDoubleClick={this.handleRateDoubleClick}
                    handleRateBlur={this.handleRateBlur}
                />
            </article>
        )
    }
}

export default Skills;