import { Component } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            specialty: {text: faker.name.jobType(), showInputEle: false},
            companyName: {text: faker.company.companyName(), showInputEle: false},
            companyCity: {text: faker.address.city(), showInputEle: false},
            startYear: {text: 2012, showInputEle: false},
            endYear: {text: 2015, showInputEle: false},
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
            <section id="experience-section">
                <header className="main-header">Experience</header>
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
                    <ElementMaker name="companyName"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.companyName.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.companyName.showInputEle}
                    />
                    <span>, </span>
                    <ElementMaker name="companyCity"
                        mutableTagType="input"
                        type="text"
                        staticTagType="span"
                        text={this.state.companyCity.text}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        handleDoubleClick={this.handleDoubleClick}
                        showInputEle={this.state.companyCity.showInputEle}
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

export default Experience;