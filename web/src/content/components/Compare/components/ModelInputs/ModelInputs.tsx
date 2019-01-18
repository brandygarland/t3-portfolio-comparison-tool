import * as React from 'react'
import { IApp } from '../../../../App'
import SymbolSearchInputs from './SymbolSearchInput'

interface IInputs extends IApp {

}

export default class ModelInputs extends React.PureComponent<IInputs> {
    render() {
        return (
            <>
                here is where the inputs with percentages will go
                <SymbolSearchInputs {...this.props}/>
                <button 
                    className="btn btn-lg btn-primary"
                    style={{display: `block`, margin: `10px auto`}}
                    onClick={this.props.comparePortfolios}
                >
                    Compare Portfolios
                    </button>
            </>
        )
    }
}