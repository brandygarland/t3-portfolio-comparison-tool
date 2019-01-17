import * as React from 'react'

interface IconTypes {
    id: string;
    faIcon: string;
    additionalClasses?: string;
    onClick?: () => void;
}

const Icon = (props: IconTypes) => {
    return (
        <span
            id={`${props.id}-span`}
            onClick={(props.onClick ? props.onClick : () => {return null})}
            className={`${props.additionalClasses ? props.additionalClasses+'-span' : ''}`}
        >
            <i
                id={props.id}
                className={`fas fa-${props.faIcon} ${props.additionalClasses ? props.additionalClasses : ''}`}
            />
        </span>
    )
}
export default Icon