import * as React from 'react'

interface LabelTypes {
    label: string;
    additionalClasses?: string;
    showColon?: boolean;
}

const Label = (props: LabelTypes) => {
    const colon = (props.showColon ? ':' : '')
    return (
        <label className={`label ${props.additionalClasses ? props.additionalClasses : ''}`}>{props.label}{colon}</label>
    )
}

export default Label

