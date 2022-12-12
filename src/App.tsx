import React from 'react';
import './App.css';
import {DataEntryForm} from "./DataEntryForm";
import 'milligram';

const messages = [
    "THE PATIENT IS MORE LIKELY TO HAVE A BENIGN CANCER",
    "THE PATIENT IS MORE LIKELY TO HAVE A MALIGNANT CANCER"
]

class App extends React.Component {

    state: {
        result: string
    }
    constructor(props: any) {
        super(props);
        this.state = {
            result: ''
        }
        this.displayText = this.displayText.bind(this)
    }

    displayText(t: number) {
        if (!([0, 1].includes(t))) {
            return {
                result: 'Server returned invalid response'
            }
        }
        this.setState(() => {
            return {result: messages[t]}
        })
    }

    render() {
        return (
            <div className="App">
                <div>{this.state.result}</div>
                <DataEntryForm setDisplay={this.displayText}/>
            </div>
        );
    }
}

export default App;
