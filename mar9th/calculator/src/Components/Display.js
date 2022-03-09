import React, { Component } from 'react';
import "./Display.css";

class Display extends Component{
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        )
    }
}
// {/* <Display data={5} /> */}

export default Display;