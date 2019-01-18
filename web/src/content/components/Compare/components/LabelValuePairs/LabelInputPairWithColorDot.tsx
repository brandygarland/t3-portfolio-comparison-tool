import * as React from 'react'
import { ILabelValuePair } from './LabelValuePair'

interface ILabelInputPairWithColorDot extends ILabelValuePair {
    color: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInputPairWithColorDot = (props: ILabelInputPairWithColorDot) => {
    const {color, label, onChange, value} = props
    return (
        <div style={{width: `350px`, margin: `auto`}}>
            <div className={'color-dot'} style={{backgroundColor: `${color}`}}/> 
            <label className={'bold-label'} style={{width: `150px`, display: `inline-block`}} >{label}:</label>
            <input 
                value={value} 
                type='number' 
                className='form-control' 
                style={{width: `75px`, display: `inline-block`}} 
                onChange={onChange}
                min={1}
                max={100}
            />
            <label 
                className={'bold-label'} 
                style={{width: `15px`, display: `inline-block`, marginLeft: '5px',}} 
            >
                %
            </label>

        </div>
    )
}

export default LabelInputPairWithColorDot