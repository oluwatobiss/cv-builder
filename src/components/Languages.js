import { Component } from "react";
import uniqid from "uniqid";
import LanguageInfo from "./LanguageInfo";

class Languages extends Component {
    constructor() {
        super();
        this.state = { 
            myLanguages: [<LanguageInfo key={uniqid()} />]
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

    handleBtnClick = () => {
        this.setState({
            myLanguages: [...this.state.myLanguages, <LanguageInfo key={uniqid()} />]
        })
    }

    render() {
        return (
            <section id="languages-section">
                <header className="aside-header">
                    <span>Languages</span>
                    <button className="aside-btn" onClick={this.handleBtnClick}>Add More</button>
                </header>
                {this.state.myLanguages}
            </section>
        )
    }
}

export default Languages;