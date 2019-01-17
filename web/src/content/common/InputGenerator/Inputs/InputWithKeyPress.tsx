import * as React from 'react'
import Label from '../../Label'
import { SingleInputTypes } from '../InputGenerator'

interface InputWithKeyPressTypes extends SingleInputTypes {
    onInputChange: (key: string, value: string) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

}

const InputWithKeyPress = (props: InputWithKeyPressTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <Label label={props.label} showColon={true} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                type={(props.inputType ? props.inputType : 'text')}
                value={props.data || ''}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
                onKeyPress={(event)=> props.onKeyPress(event)}
                onKeyDown={(props.onKeyDown ? (event) => props.onKeyDown(event) : () => {return null})}
            />
        </div>
    )
}

export default InputWithKeyPress