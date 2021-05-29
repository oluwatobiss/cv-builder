import { Component } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

class LanguageInfo extends Component {
    constructor() {
        super();
        this.state = { 
            myLanguage: {text: "English", readOnly: true},
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
                <ElementMaker name="myLanguage"
                    mutableTagType="input"
                    type="text"
                    staticTagType="p"
                    text={this.state.myLanguage.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.myLanguage.showInputEle}
                />
                <HoverRating hoverName="myLanguage"
                    defaultRating={1.5} 
                    readOnly={this.state.myLanguage.readOnly} 
                    handleRateDoubleClick={this.handleRateDoubleClick}
                    handleRateBlur={this.handleRateBlur}
                />
            </article>
        )
    }
}

export default LanguageInfo;