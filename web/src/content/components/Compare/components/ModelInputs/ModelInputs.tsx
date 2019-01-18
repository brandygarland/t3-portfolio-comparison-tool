import * as React from 'react'
import { IApp } from '../../../../App'
import SymbolSearchInputs from './SymbolSearchInput'
import { colorsArray } from '../../../../common/colors'
import LabelInputPairWithColorDot from '../LabelValuePairs/LabelInputPairWithColorDot'

interface IInputs extends IApp {

}

export default class ModelInputs extends React.PureComponent<IInputs> {
    render() {
        const { positions } = this.props.appState
        return (
            <>
                {positions.map((position, index) => {
                    let positionInLabelInputPairFormat = {
                        label: position.symbol,
                        color: colorsArray[index],
                        value: this.props.appState.positions[index].value,
                        index,
                        onChange: this.props.inputChange(`${index}`, 'positions-value'),
                    }

                    return (
                        <LabelInputPairWithColorDot {...positionInLabelInputPairFormat} key={index} />
                    )
                })}
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