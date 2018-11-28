import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
    render(){
        return(
            <button className="button" value={this.props.value}>{this.props.children}</button>
        )
    }
}

export default Button;