import * as React from 'react'
import { IApp } from '../../../../App'

interface IModels extends IApp {

}

export default class Models extends React.PureComponent<IModels> {
    render() {
        return (
            <div>
                Model Dropdown 
                Models displayed...
            </div>
        )
    }
}