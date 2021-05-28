import { Component } from "react";
import uniqid from "uniqid";
import SkillInfo from "./SkillInfo";

class Skills extends Component {
    constructor() {
        super();
        this.state = { 
            mySkills: [<SkillInfo key={uniqid()} />]
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

    handleBtnClick = () => {
        this.setState({
            mySkills: [...this.state.mySkills, <SkillInfo key={uniqid()} />]
        })
    }

    render() {
        return (
            <section id="skills-section">
                <header className="aside-header">
                    <span>Skills</span>
                    <button className="aside-btn" onClick={this.handleBtnClick}>Add More</button>
                </header>
                <div>
                    {this.state.mySkills}
                </div>
            </section>
        )
    }
}

export default Skills;