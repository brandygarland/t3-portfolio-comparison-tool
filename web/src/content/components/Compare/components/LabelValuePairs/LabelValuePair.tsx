import * as React from 'react'

export interface ILabelValuePair {
    label: string;
    value: string;
}

const LabelValuePair = (props: ILabelValuePair) => {
    return (
        <div style={{width: `310px`, margin: `auto`}}>
            <label className={'bold-label'}>{props.label}:</label>
            <label className={'value-label'}>{props.value}</label>
        </div>
    )
}

export default LabelValuePair