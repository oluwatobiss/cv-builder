import { Component } from "react";
import HoverRating from "./HoverRating";

class Languages extends Component {
    constructor() {
        super();
        this.state = { 
            englishHover: {readOnly: true},
            frenchHover: {readOnly: true},
        }
    }

    handleRateDoubleClick = (e) => {
        const {id} = e.target;
        console.log(`I double clicked ${id}`)
        this.setState({[id]: {readOnly: false}});
    }
    handleRateBlur = (e) => {
        const {id} = e.currentTarget;
        console.log(`I blurred ${id}`)
        this.setState({[id]: {readOnly: true}});
    }

    render() {
        return (
            <section id="languages-section">
                <header className="aside-header">Languages</header>
                <div>
                    <article>
                        <p className="sub-header">English</p>
                        <HoverRating hoverName="englishHover"
                            defaultRating={1.5} 
                            readOnly={this.state.englishHover.readOnly} 
                            handleRateDoubleClick={this.handleRateDoubleClick}
                            handleRateBlur={this.handleRateBlur}
                        />
                    </article>
                    <article>
                        <p className="sub-header">French</p>
                        <HoverRating hoverName="frenchHover"
                            defaultRating={4} 
                            readOnly={this.state.frenchHover.readOnly} 
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