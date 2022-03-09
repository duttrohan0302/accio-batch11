import React,{ Component } from 'react';
import './Keypad.css';

class Keypad extends Component{
    render(){
        return(
            <div className="Keypad">
                {this.props.children}
            </div>
        )
    }
}
// {/* <Keypad>
//     <Button data={5} data-size={1} />
//     <Button data={5} data-size={1} />
//     <Button data={5} data-size={1} />
// </Keypad> */}
export default Keypad