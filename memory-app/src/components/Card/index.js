import React, {Component} from "react";
import "./style.css";

class Card extends Component {
    state = {
        name: "",
        src: ""
    }
    render() {
      return (<div className="card"><img src={this.state.src} alt={this.state.name}/> </div>);
    }
}

export default Card;
