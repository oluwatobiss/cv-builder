import { Component } from "react";
import HoverRating from "./HoverRating";
import ElementMaker from "./ElementMaker";

class Skills extends Component {
    constructor() {
        super();
        this.state = { 
            myFirstSkill: {text: "React", readOnly: true},
            mySecondSkill: {text: "Node.js", readOnly: true},
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
            <section id="skills-section">
                <header className="aside-header">Skills</header>
                <div>
                    <article>
                        <ElementMaker name="myFirstSkill"
                            mutableTagType="input"
                            type="text"
                            staticTagType="p"
                            text={this.state.myFirstSkill.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.myFirstSkill.showInputEle}
                        />
                        <HoverRating hoverName="myFirstSkill"
                            defaultRating={3.5} 
                            readOnly={this.state.myFirstSkill.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                    <article>
                        <ElementMaker name="mySecondSkill"
                            mutableTagType="input"
                            type="text"
                            staticTagType="p"
                            text={this.state.mySecondSkill.text}
                            handleEleChange={this.handleEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.mySecondSkill.showInputEle}
                        />
                        <HoverRating hoverName="mySecondSkill"
                            defaultRating={5} 
                            readOnly={this.state.mySecondSkill.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                </div>
            </section>
        )
    }
}

export default Skills;