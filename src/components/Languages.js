import { Component } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

class Languages extends Component {
    constructor() {
        super();
        this.state = { 
            myFirstLanguage: {text: "English", readOnly: true},
            mySecondLanguage: {text: "French", readOnly: true},
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
        const {id} = e.target;
        this.setState({[id]: {readOnly: false}});
    }
    handleRateBlur = (e) => {
        const {id} = e.currentTarget;
        this.setState({[id]: {readOnly: true}});
    }

    render() {
        return (
            <section id="languages-section">
                <header className="aside-header">Languages</header>
                <div>
                    <article>
                        <ElementMaker name="myFirstLanguage"
                            mutableTagType="input"
                            type="text"
                            staticTagType="p"
                            text={this.state.myFirstLanguage.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.myFirstLanguage.showInputEle}
                        />
                        <HoverRating hoverName="myFirstLanguage"
                            defaultRating={1.5} 
                            readOnly={this.state.myFirstLanguage.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                    <article>
                        <ElementMaker name="mySecondLanguage"
                            mutableTagType="input"
                            type="text"
                            staticTagType="p"
                            text={this.state.mySecondLanguage.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.mySecondLanguage.showInputEle}
                        />
                        <HoverRating hoverName="mySecondLanguage"
                            defaultRating={4} 
                            readOnly={this.state.mySecondLanguage.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                </div>
            </section>
        )
    }
}

export default Languages;