import React, { Component } from 'react';
import './Button.css'

class Button extends Component{
    render(){
        return(
            <div className="Button"
                onClick={this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value}
            >
                {this.props.label}
            </div>
        )
    }
}

export default Button;