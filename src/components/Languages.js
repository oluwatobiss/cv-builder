import { Component } from "react";
import HoverRating from "./HoverRating";

class Languages extends Component {
    constructor() {
        super();
        this.state = { readOnly: true }
    }

    handleDoubleClick = () => this.setState({readOnly: false});
    handleBlur = () => this.setState({readOnly: true});

    render() {
        return (
            <section id="languages-section">
                <header className="aside-header">Languages</header>
                <div>
                    <article>
                        <p className="sub-header">English</p>
                        <HoverRating 
                            defaultRating={1.5} 
                            readOnly={this.state.readOnly} 
                            handleDoubleClick={this.handleDoubleClick}
                            handleBlur={this.handleBlur}
                        />
                    </article>
                    <article>
                        <p className="sub-header">French</p>
                        <HoverRating 
                            defaultRating={4} 
                            readOnly={this.state.readOnly} 
                            handleDoubleClick={this.handleDoubleClick}
                            handleBlur={this.handleBlur}
                        />
                    </article>
                </div>
            </section>
        )
    }
}

export default Languages;