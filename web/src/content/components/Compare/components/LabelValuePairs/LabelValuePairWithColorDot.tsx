import * as React from 'react'
import { ILabelValuePair } from './LabelValuePair'

interface ILabelValuePairWithColorDot extends ILabelValuePair {
    color: string;
}

const LabelValuePairWithColorDot = (props: ILabelValuePairWithColorDot) => {
    return (
        <div style={{width: `350px`, margin: `auto`}}>
            <div className={'color-dot'} style={{backgroundColor: `${props.color}`}}/> 
            <label className={'bold-label'}>{props.label}:</label>
            <label className={'value-label'}>{props.value}</label>
        </div>
    )
}

export default LabelValuePairWithColorDot