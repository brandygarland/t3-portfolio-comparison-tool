import * as React from 'react'
import { IApp } from '../../../../App'

interface IInputs extends IApp {

}

export default class ModelInputs extends React.PureComponent<IInputs> {
    render() {
        return (
            <>
            this is where the inputs will go

                <button 
                    className="btn btn-lg btn-primary"
                    style={{display: `block`, margin: `auto`}}
                    onClick={this.props.comparePortfolios}
                >
                    Compare Portfolios
                    </button>
            </>
        )
    }
}