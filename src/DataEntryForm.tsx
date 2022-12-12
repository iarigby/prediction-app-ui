import React from "react";
import {DataEntry, defaultEntries} from "./DataEntry";
import {DataEntryLabel} from "./DataEntryLabel";
import {fetchPrediction} from "./requests";


interface Props {
    setDisplay: (t: number) => void;
}


export class DataEntryForm extends React.Component<Props> {

    state: {
        entries: DataEntry[]
    }
    constructor(props: Props) {
        super(props);
        this.state = {
            entries: defaultEntries
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.displayResult = this.displayResult.bind(this)
    }

    displayResult(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        const requestData: any = {}
        this.state.entries.forEach(e => {
            requestData[e.requestAttribute] = e.value
        })
        fetchPrediction(requestData)
            .then(prediction => this.props.setDisplay(prediction))
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState((state: {entries: DataEntry[], requestData: any}) => {
            return {
                entries: state.entries.map(e => {
                    if (e.requestAttribute === name) {
                        e.value = Number(value)
                    }
                    return e
                }),
                requestData: state.requestData
            }
        });
    }

    render() {
        return (
            <div>
                <form key="form" onSubmit={this.displayResult}>
                    {this.state.entries.map(entry =>
                        <DataEntryLabel key={entry.requestAttribute} data={entry} handleInputChange={this.handleInputChange}/>
                    )}
                <input key="submit-input"
                       className="button-primary" type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}