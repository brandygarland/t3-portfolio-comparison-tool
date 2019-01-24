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
        let value = 0;
        this.props.appState.positions.forEach(position => {
            value += Number(position.value)
        })
        return (
            <>
                <SymbolSearchInputs {...this.props}/>
                <div style={{margin: `20px auto 10px auto`}}>
                    {positions.map((position, index) => {
                        let positionInLabelInputPairFormat = {
                            label: position.ticker,
                            color: colorsArray[index],
                            value: this.props.appState.positions[index].value.toString(),
                            index,
                            onChange: this.props.inputChange(`${index}`, 'positions-value'),
                            onClick: this.props.removePosition(position)
                        }

                        return (
                            <LabelInputPairWithColorDot {...positionInLabelInputPairFormat} key={index} />
                        )
                    })}
                </div>
                
               
                <button 
                    className="btn btn-lg btn-primary"
                    style={{display: `block`, margin: `10px auto`}}
                    onClick={this.props.comparePortfolios}
                    disabled={value !== 100}
                >
                    Compare Portfolios
                </button>
            </>
        )
    }
}