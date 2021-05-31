import { Component } from "react";
import uniqid from "uniqid";
import ElementMaker from "./ElementMaker";
import Achievement from "./Achievement";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            specialty: {text: "Business Administration", showInputEle: false},
            mySchoolName: {text: "University of California", showInputEle: false},
            mySchoolCity: {text: "Berkeley", showInputEle: false},
            startYear: {text: 2008, showInputEle: false},
            endYear: {text: 2012, showInputEle: false},
            myAchievements: [<Achievement key={uniqid()} />, <Achievement key={uniqid()} />],
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

    handleBtnClick = () => {
        this.setState({
            myAchievements: [...this.state.myAchievements, <Achievement key={uniqid()} />]
        })
    }

    render() {
        return (
            <>
                <div className="specialty-div">
                    <ElementMaker name="specialty"
                        mutableTagType="input"
                        type="text"
                        placeholder="Degree"
                        staticTagType="span"
                        text={this.state.specialty.text}
                        handleEleChange={this.handleEleChange}
                        handleEleBlur={this.handleEleBlur}
                        handleEleDoubleClick={this.handleEleDoubleClick}
                        showInputEle={this.state.specialty.showInputEle}
                    />
                    <button className="header-btn" onClick={this.handleBtnClick}>Add Achievement</button>
                </div>
                <p>
                    <ElementMaker name="mySchoolName"
                        mutableTagType="input"
                        type="text"
                        placeholder="School/Institution"
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
                        placeholder="City"
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
                <ul>{this.state.myAchievements}</ul>
            </>
        )
    }
}

export default Education;