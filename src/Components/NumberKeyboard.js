import React, {Component} from 'react';
import Button from './Button';
import Screen from './screen';
import './keyboard.css'

class NumberKeyboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            operations: [],
        }

    }

    printResult() {
        console.log(this.state.operations)
    }

    
    operationResult = () =>  {
        const expression = this.state.operations.join('');
        let result = eval(expression)
        this.setState({
            operations: [result]}, 
            function () {this.printResult()});
    }

    handleInput = (e) => {
        const buttonClicked=e.target.value;

        switch(buttonClicked){
            case 'clear':
                this.setState({
                    operations: [],
                })
            break;
            
            case 'equal':
                this.operationResult();
            break;

            case 'AC':
                this.acFunction()
            break;

            default:
                const newOperation = this.state.operations;
                newOperation.push(buttonClicked);
                this.setState({
                    operations:newOperation}, 
                    function () {this.printResult()})
                console.log(this.state.operations)
            break;
        }
      }

    render() {
        return (
            <div className="keyboard">
                <div className="column"></div>
                <div className="column">
                    <div className="keyboardRow roundBorder" onClick={e => this.handleInput(e, "value")}>
                        <Screen className="crystalScreen">{this.state.operations}</Screen>
                        <Button value="clear" >C</Button> 
                        <Button value="AC">AC</Button>
                        <Button value=".">.</Button>
                        <Button value="+">+</Button>
                    </div>
                    <div className="keyboardRow" onClick={e => this.handleInput(e, "value")}>
                        <Button value="1">1</Button>
                        <Button value="2">2</Button>
                        <Button value="3">3</Button>
                        <Button value="-">-</Button>
                    </div>
                    <div className="keyboardRow" onClick={e => this.handleInput(e, "value")}>
                        <Button value="4">4</Button>
                        <Button value="5">5</Button>
                        <Button value="6">6</Button>
                        <Button value="*">X</Button>
                    </div>
                    <div className="keyboardRow" onClick={e => this.handleInput(e, "value")}>
                        <Button value="7">7</Button>
                        <Button value="8">8</Button>
                        <Button value="9">9</Button>
                        <Button value="%">÷</Button>
                    </div>
                    <div className="keyboardRow  lastRow" onClick={e => this.handleInput(e, "value")}>
                        <Button value="0">0</Button>
                        <Button value="equal">=</Button>
                    </div>
                </div>

                <div className="column"></div>
            </div>
        )
    }
}

export default NumberKeyboard;