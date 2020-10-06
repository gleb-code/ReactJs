import React, { Component } from 'react';
import './index.css';
import {BsPencil, BsX, BsCheck} from 'react-icons/bs';

class Card extends Component {
    state = {
        isChecked: false,
        isEdit: false,
        cardData : {
            Logo: 'Caption',
            Text: 'Some text ...',
        },
        tempCardData: {
            
        }
        
    }
    changeStyles = () => {
        this.setState({isChecked :!this.state.isChecked});
    }
    changeEditStatus = () =>{
        this.setState({isEdit : !this.state.isEdit, isChecked: false,tempCardData:this.state.cardData});
    }
    handleChangeInfo = (event,name) =>{
        this.setState({ 
            tempCardData: { 
                ...this.state.tempCardData,
                [name]: event.target.value
            }
        });
    }
    changeCardInfo = () => {
        this.setState({cardData: {...this.state.tempCardData}, isChecked: false});
        this.changeEditStatus();
    }
    render() {
        return (
            <div className="Card">
                <div className="textMarg">
                    <div className={this.state.isChecked ? "blue" : null}>
                        <div className="solidBorder">
                            {this.state.isEdit ? 
                                (
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder={this.state.cardData.Logo}
                                            value={this.state.tempCardData.Logo || ''}
                                            onChange={(event) => this.handleChangeInfo(event, 'Logo')}
                                        />
                                        <div className="topRight">
                                            <div className="block">
                                                <BsCheck className= "green" onClick={this.changeCardInfo}/>
                                                <BsX className="red" onClick={this.changeEditStatus} />
                                            </div>
                                        </div>
                                        <hr />
                                        <input 
                                            type="text" 
                                            placeholder={this.state.cardData.Text}
                                            value={this.state.tempCardData.Text || ''} 
                                            onChange={(event) => this.handleChangeInfo(event, 'Text')}
                                        />
                                    </div>
                                ) :
                                (
                                    <div>
                                        <p className="bold">{this.state.cardData.Logo}</p>
                                        <div className="topRight">
                                            <div className="block">
                                                <BsPencil className="blue" onClick={this.changeEditStatus} />
                                                <input type="checkbox" checked={this.state.isChecked} onChange={this.changeStyles} />  
                                            </div>
                                        </div>
                                        <hr />
                                        <p>{this.state.cardData.Text}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }

export default Card;