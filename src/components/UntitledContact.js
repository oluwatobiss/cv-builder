import { Component } from "react";
import ElementMaker from "./ElementMaker";

class UntitledContact extends Component {
    constructor() {
        super();
        this.state = {
            subHeader: {text: "Title", showInputEle: false},
            myCustomContactText: {text: "Contact Details", showInputEle: false},
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
            <article>
                <ElementMaker name="subHeader"
                    mutableTagType="input"
                    type="text"
                    placeholder="Label"
                    staticTagType="p"
                    text={this.state.subHeader.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.subHeader.showInputEle}
                />
                <ElementMaker name="myCustomContactText"
                    mutableTagType="input"
                    type="text"
                    placeholder="Link"
                    staticTagType="p"
                    text={this.state.myCustomContactText.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.myCustomContactText.showInputEle}
                />
            </article>
        )
    }
}

export default UntitledContact;