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

    handleChange = (e) => {
        const {name, value} = e.target;
        Number(value) !== 0 ?
        this.setState({[name]: {...this.state[name], text: value}}) :
        alert("Invalid Input: Only Numbers Allowed.");
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], showInputEle: false}});
    }

    handleDoubleClick = (e) => {
        const {className} = e.target;
        this.setState({[className]: {...this.state[className], showInputEle: true}});
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
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    handleDoubleClick={this.handleDoubleClick}
                    showInputEle={this.state.specialty.showInputEle}
                />
                <p>
                    <ElementMaker name="mySchoolName"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.mySchoolName.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.mySchoolName.showInputEle}
                    />
                    <span>, </span>
                    <ElementMaker name="mySchoolCity"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.mySchoolCity.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
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
                            handleChange={this.handleChange}
                            handleBlur={this.handleBlur}
                            handleDoubleClick={this.handleDoubleClick}
                            showInputEle={this.state.startYear.showInputEle}
                        />
                        <span> - </span>
                        <ElementMaker name="endYear"
                            mutableTagType="input"
                            type="number"
                            staticTagType="span"
                            text={this.state.endYear.text}
                            handleChange={this.handleChange}
                            handleBlur={this.handleBlur}
                            handleDoubleClick={this.handleDoubleClick}
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
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.myAchievement1.showInputEle}
                    />
                    <ElementMaker name="myAchievement2"
                        mutableTagType="input"
                        type="text"
                        staticTagType="li"
                        text={this.state.myAchievement2.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.myAchievement2.showInputEle}
                    />
                </ul>
            </section>
        )
    }
}

export default Education;