import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            specialty: {text: "Business Administration", showInputEle: false},
            mySchoolName: {text: "University of California", showInputEle: false},
            mySchoolCity: {text: "Berkeley", showInputEle: false},
            startYear: {text: 2008, showInputEle: false},
            endYear: {text: 2012, showInputEle: false},
            myAchievement1: {text: faker.lorem.sentence(), showInputEle: false},
            myAchievement2: {text: faker.lorem.sentence(), showInputEle: false},
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

    handleNumEleChange = (e) => {
        const {name, value} = e.target;
        Number(value) !== 0 ?
        this.setState({[name]: {...this.state[name], text: value}}) :
        alert("Invalid Input: Only Numbers Allowed.");
    }

    render() {
        return (
            <section id="education-section">
                <header className="main-header">Education</header>
                <ElementMaker name="specialty"
                    mutableTagType="input"
                    type="text"
                    staticTagType="p"
                    text={this.state.specialty.text}
                    handleEleChange={this.handleEleChange}
                    handleEleBlur={this.handleEleBlur}
                    handleEleDoubleClick={this.handleEleDoubleClick}
                    showInputEle={this.state.specialty.showInputEle}
                />
                <p>
                    <ElementMaker name="mySchoolName"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.mySchoolName.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.mySchoolName.showInputEle}
                    />
                    <span>, </span>
                    <ElementMaker name="mySchoolCity"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.mySchoolCity.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.mySchoolCity.showInputEle}
                    />
                </p>
                <p>
                    <em>
                        <ElementMaker name="startYear"
                            mutableTagType="input"
                            type="number"
                            staticTagType="span"
                            text={this.state.startYear.text}
                            handleEleChange={this.handleNumEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.startYear.showInputEle}
                        />
                        <span> - </span>
                        <ElementMaker name="endYear"
                            mutableTagType="input"
                            type="number"
                            staticTagType="span"
                            text={this.state.endYear.text}
                            handleEleChange={this.handleNumEleChange}
                            handleEleBlur={this.handleEleBlur}
                            handleEleDoubleClick={this.handleEleDoubleClick}
                            showInputEle={this.state.endYear.showInputEle}
                        />
                    </em>
                </p>
                <ul>
                    <ElementMaker name="myAchievement1"
                        mutableTagType="input"
                        type="text"
                        staticTagType="li"
                        text={this.state.myAchievement1.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myAchievement1.showInputEle}
                    />
                    <ElementMaker name="myAchievement2"
                        mutableTagType="input"
                        type="text"
                        staticTagType="li"
                        text={this.state.myAchievement2.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.myAchievement2.showInputEle}
                    />
                </ul>
            </section>
        )
    }
}

export default Education;