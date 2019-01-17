import * as React from 'react'
import Label from '../../Label'
import { SingleInputTypes } from '../InputGenerator'

interface InputTypes extends SingleInputTypes {
    onInputChange: (key: string, value: string) => void;
}

const Input = (props: InputTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <Label label={props.label} showColon={true} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                type={(props.inputType ? props.inputType : 'text')}
                value={props.data || ''}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            />
        </div>
    )
}

export default Input