import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Score from "./Score";

class App extends Component {
    render() {
        return (
            <Score/>
        );
    }
}

export default hot(module)(App);