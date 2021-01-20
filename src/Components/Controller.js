import React from 'react';
import { FaPauseCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import './Controller.css';

class Controller extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="controller">
                <div className="icons">

                <button onClick={this.props.onStartStop} >
                    {this.props.isStart ? <FaPauseCircle className="icon" /> : <FaStopCircle className="icon" /> }
                </button>

                 
                <GrPowerReset className="icon" onClick={this.props.onReset}/>
                </div>
            </div>
         );
    }
}
 
export default Controller;