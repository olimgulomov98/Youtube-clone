import React, {Component} from "react";
import './index.css';
import Navbar from "./Navbar/Navbar.jsx";
import Option from './Option/Option.jsx';
import Head from './Head/Head.jsx'

class Main extends Component {
    render() {
        return(
            <>
            <Navbar />
            <div className="container">
                <Option />
                <Head />
            </div>
            </>
        )
    }
}
export default Main