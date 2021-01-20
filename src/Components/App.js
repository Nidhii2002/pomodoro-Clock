import React from 'react';
import Header from './Header';
import Sections from './Sections';
import Time from './Time';
import Controller from './Controller';
import './App.css';

class App extends React.Component {

    constructor(props) {
         super(props);

        this.state = {

            brLength: parseInt(this.props.defaultBrLength, 10),
            ssLength: parseInt(this.props.defaultSeLength, 10),
            timeLeftInSecond: parseInt(this.props.defaultSeLength, 10)* 60,
            timeLabel: 'session',
            isStart: true,
            timeInterval: null

        }
    }

    onIncBrLength = () => {

        if(this.state.brLength < 60){
            this.setState({
                brLength: this.state.brLength + 1
            })
        }
    }

    onDecBrLength = () => {
        if(this.state.brLength > 1){
            this.setState({
                brLength: this.state.brLength - 1
            })
        }
    }

    onIncSsLength = () => {
        if(this.state.ssLength < 60)
        this.setState({
            ssLength: this.state.ssLength + 1,
            timeLeftInSecond: (this.state.ssLength + 1) * 60
        })
    }

    onDecSsLength = () => {
        if(this.state.ssLength > 1)
        this.setState({
            ssLength: this.state.ssLength - 1,
            timeLeftInSecond: (this.state.ssLength - 1) * 60
        })
    }    

    onRest = () => {
        this.setState({
            brLength: parseInt(this.props.defaultBrLength, 10),
            ssLength: parseInt(this.props.defaultSeLength, 10),
            timeLeftInSecond: parseInt(this.props.defaultSeLength, 10)* 60,
            timeLabel: 'session',
            isStart: false,
            timeInterval: null
        })
    }

    onStartStop = () => {
        if(this.state.isStart) {
            this.setState({
                isStart: !this.state.isStart,
                timeInterval: setInterval( () => {
                        this.secHandler();
                        this.minHandler();
                    }
                , 1000)
            })
        } else {
            clearInterval(this.state.timerInterval);
            // this.setState({
            //     isStart: !this.state.isStart,
            //     timeInterval: null
            // })
        }
    }

    secHandler = () => {
        this.setState({
            timeLeftInSecond: this.state.timeLeftInSecond - 1
        })
    }

    minHandler = () => {
        if(this.state.timeLeftInSecond === -1) {
            if(this.state.timeLabel === 'session') {
                this.setState({
                    timeLabel: 'Break',
                    timeLeftInSecond: this.state.brLength * 60
                })
            } 
            else {
                this.setState({
                    timeLabel: 'session',
                    timeLeftInSecond: this.state.ssLength * 60
                })
            }
        }
    }

    render() { 
        return ( 
            <div>
                <Header />
               <Sections brLength = {this.state.brLength} 
                        onIncBrLength = {this.onIncBrLength}
                        onDecBrLength = {this.onDecBrLength}
                        ssLength = {this.state.ssLength}
                        onIncSsLength = {this.onIncSsLength}
                        onDecSsLength = {this.onDecSsLength}
                />

               <Time
               timeLabel = {this.state.timeLabel}
               timeLeftInSecond = {this.state.timeLeftInSecond}
                />

               <Controller
               onReset = {this.onRest}
               onStartStop = {this.onStartStop}
               isStart = {this.state.isStart}
                />
            </div>
         );
    }
}
 
export default App;