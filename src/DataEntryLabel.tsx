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
            <label className="entry-label">
                <div className="label-text">
                    {this.data.displayName}
                </div>
                <input
                    required
                    name={this.data.requestAttribute}
                    type="number"
                    min={this.data.minValue}
                    max={this.data.maxValue}
                    defaultValue={this.data.value}
                    step="any"
                    onChange={this.handleInputChange} />
            </label>
        )
    }
}