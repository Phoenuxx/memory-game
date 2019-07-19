import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Fill your Pokedex!</h1>
                <h3>Click each picture once and only once. Click it a second time and you lose. Can you catch 'em all?</h3>
            </div>
        );
    }

}

export default Header;
