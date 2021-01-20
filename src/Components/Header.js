import React from 'react';
import './Header.css';

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="pomo-header"> 
                <h1>
                    Pomodoro Clock!
                </h1>
            </div>
         );
    }
}
 
export default Header;