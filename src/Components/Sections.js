import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import './Sections.css';

class Sectoins extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="sections">
                    <div className="blength">
                        <h3 className="heading">BreakLength</h3>
                        <FaArrowAltCircleUp className="up" onClick={this.props.onIncBrLength}/>
                        <button className="btn">{this.props.brLength}</button>
                        <FaArrowAltCircleDown className="down" onClick={this.props.onDecBrLength}/>
                    </div>
                    
                    <div className="slength">
                    <h3 className="heading">SessionLength</h3>
                        <FaArrowAltCircleUp className="up" onClick={this.props.onIncSsLength}/>
                        <button className="btn">{this.props.ssLength}</button>
                        <FaArrowAltCircleDown className="down" onClick={this.props.onDecSsLength}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Sectoins;