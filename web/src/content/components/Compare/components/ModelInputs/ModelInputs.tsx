import * as React from 'react'
import { IApp } from '../../../../App'
import SymbolSearchInputs from './SymbolSearchInput'

interface IInputs extends IApp {

}

export default class ModelInputs extends React.PureComponent<IInputs> {
    render() {
        return (
            <>
                <SymbolSearchInputs {...this.props}/>

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