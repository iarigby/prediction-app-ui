import React from "react";
import {DataEntry, defaultEntries} from "./DataEntry";
import {DataEntryLabel} from "./DataEntryLabel";

export class DataEntryForm extends React.Component {
    state: {
        entries: DataEntry[]
    };
    constructor(props: any) {
        super(props);
        this.state = {
            entries: defaultEntries
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState((state: {entries: DataEntry[]}) => {
            state.entries.forEach(e => {
                if (e.requestAttribute === name) {
                    e.value = Number(value)
                }
            })
        });
    }

    render() {
        return (
            <form>
                {this.state.entries.map(entry =>
                    <DataEntryLabel key={entry.requestAttribute} data={entry} handleInputChange={this.handleInputChange}/>
                )}
            </form>
        );
    }
}