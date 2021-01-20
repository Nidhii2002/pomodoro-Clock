import React from 'react';
import './Time.css';


const formatTime = (timeLeftInSecond) => {

    let min = Math.floor(timeLeftInSecond/60);
    if(min < 10) 
        min = '0' + min;

    let sec = timeLeftInSecond - 60 * min;
    if(sec < 10)
        sec = '0' + sec;

    return `${min}:${sec}`;
}


class Time extends React.Component {

    render() { 
        return (
            <div className="tmain">
                <div className="time">
                    <br></br>
                    <label className="ss">{this.props.timeLabel}</label><br></br><br></br><br></br>
                    <span className="tt">{formatTime(this.props.timeLeftInSecond)}</span>
                </div>
            </div>
        );
    }
}
 
export default Time;