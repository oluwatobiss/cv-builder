import { Component } from "react";
import HoverRating from "./HoverRating";
// import ElementMaker from "./ElementMaker";

class Languages extends Component {
    constructor() {
        super();
        this.state = { 
            myFirstLanguage: {readOnly: true},
            mySecondLanguage: {readOnly: true},
        }
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
                        <p className="sub-header">English</p>
                        <HoverRating hoverName="myFirstLanguage"
                            defaultRating={1.5} 
                            readOnly={this.state.myFirstLanguage.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                    <article>
                        <p className="sub-header">French</p>
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