import React, { Component } from 'react';
import './index.css';

class Card extends Component {
    state = {
        isChecked: false
    }

    changeStyles = () => {
        this.setState({isChecked :!this.state.isChecked});
    }

    render(){
        return(
            <div className="Card">
                <div className="textMarg">
                    <div className={this.state.isChecked ? "blue": null}>
                        <label className="bold">Caption</label>
                        <input type="checkbox" className="topRight" onClick={this.changeStyles}/>
                        <hr />
                        <p>Some text </p>
                        <div class="item"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;