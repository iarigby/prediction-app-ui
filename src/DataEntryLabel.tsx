import React from "react";
import {DataEntry} from "./DataEntry";

type InputHandler = {
    (e: React.ChangeEvent<HTMLInputElement>): void
}

interface Props {
    data: DataEntry
    handleInputChange: InputHandler
}

export class DataEntryLabel extends React.Component<Props> {
    data: DataEntry
    handleInputChange: InputHandler
    constructor(props: Props) {
        super(props)
        this.data = props.data
        this.handleInputChange = props.handleInputChange
    }

    render() {
        return (
            <label>
                {this.data.displayName}
                <input
                    name={this.data.requestAttribute}
                    type="number"
                    value={this.data.value}
                    onChange={this.handleInputChange} />
            </label>
        )
    }
}