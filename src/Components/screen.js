import React, {Component} from 'react';
import './screen.css'

class Screen extends Component{
    render(){
        return(
            <div className="inputScreen">{this.props.children}</div>
        )
    }
}

export default Screen;