import * as React from 'react'
import Label from '../../Label'
import { SingleInputTypes } from '../InputGenerator'

interface SelectTypes extends SingleInputTypes {
    onInputChange: (key: string, value: string) => (event: MouseEvent) => void;
}

const Select = (props: SelectTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <Label label={props.label} showColon={true} additionalClasses={props.additionalLabelClasses}/>}
            <select
                id={props.id}
                className={`select ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                value={props.data}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            >
                {props.selectOptions.map((option: string, optionIndex: number) => {
                    return(
                        <option
                            className={`select-option`}
                            key={optionIndex}
                            value={option}
                        >
                            {option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select