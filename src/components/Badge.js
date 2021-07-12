import React from 'react';
import "./styles/Badge.css";

import schoologo from '../images/logoo.png';
import studavatar from '../images/avatar1.png';

class Badge extends React.Component {
    render() {
        return (
        <div className="badge">
            <div className="badge_header">
                <img src={schoologo} alt="logo"/>
            </div>

            <div className="badge_section-name">
                <img className="badge_avatar" src={studavatar} alt="avatar"/>
                <h1>Allie <br/> Grater</h1>
            </div>  

            <div className="badge_section-info">
                <h3>Vue.js</h3>
                <div>First step accomplished!</div>
            </div>

            <div className="badge_footer">
                <p>#BeCode</p>
            </div>  
        </div>   
        );
    }
}

export default Badge;