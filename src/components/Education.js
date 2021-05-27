import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            specialty: {text: "Business Administration", showInputEle: false},
            schoolName: {text: "University of California", showInputEle: false},
            schoolCity: {text: "Berkeley", showInputEle: false},
            startYear: {text: 2008, showInputEle: false},
            endYear: {text: 2012, showInputEle: false},
            achievement1: {text: faker.lorem.sentence(), showInputEle: false},
            achievement2: {text: faker.lorem.sentence(), showInputEle: false},
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
                    staticTagType="p"
                    text={this.state.specialty.text}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    handleDoubleClick={this.handleDoubleClick}
                    showInputEle={this.state.specialty.showInputEle}
                />
                <p>
                    <ElementMaker name="schoolName"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.schoolName.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.schoolName.showInputEle}
                    />
                    <span>, </span>
                    <ElementMaker name="schoolCity"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.schoolCity.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.schoolCity.showInputEle}
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
                    <ElementMaker name="achievement1"
                        mutableTagType="input"
                        type="text"
                        staticTagType="li"
                        text={this.state.achievement1.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.achievement1.showInputEle}
                    />
                    <ElementMaker name="achievement2"
                        mutableTagType="input"
                        type="text"
                        staticTagType="li"
                        text={this.state.achievement2.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.achievement2.showInputEle}
                    />
                </ul>
            </section>
        )
    }
}

export default Education;