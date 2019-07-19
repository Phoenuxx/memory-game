import React from "react";

// import "./style.css";



class Counter extends React.Component {
 
    state = {
        catches: 0
    }

    handleIncrement = (pokemon) => {
        if (!pokemon) {
        this.setState({count: this.state.catches + 1});
            console.log(pokemon);
        } else {
            console.log()
        }
    }

    render(props) {
        return (
            <div />
        )
    }
}

export default Counter;
