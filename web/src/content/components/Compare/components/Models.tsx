import * as React from 'react'
import { IApp } from '../../../App'
import { models } from '../../../businessLogic/models'
import LabelValuePairWithColorDot from './LabelValuePairs/LabelValuePairWithColorDot'

interface IModels extends IApp {

}

interface IModelsState {
    modelToUse: string;
}

export default class Models extends React.PureComponent<IModels, IModelsState> {
    state: IModelsState = {
        modelToUse: null,
    }

    changeModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.inputChange('modelToUse', 'model-compare')(event)
    }

    render() {
        const { modelToUse } = this.props.appState
        let modelOptions = Object.keys(models)
        return (
            <div>
                <div style={{margin: `20px auto 0px auto`}}>
                    <select 
                        onChange={this.changeModel} 
                        defaultValue={'placeholder'}
                        className='form-control'
                        style={{width: `200px`, margin: `auto`}}
                    >
                        <option value={'placeholder'} disabled={true}>Select a Model...</option>
                        {modelOptions.map((option, index) => {
                            return (
                                <option
                                     value={option} 
                                     key={index}
                                >
                                    {option.charAt(0).toUpperCase()}{option.slice(1)}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    {modelToUse === null &&
                        <h3> Select a model to compare </h3>
                    }
                    {modelToUse !== null &&
                    <div style={{margin: `20px auto`}}>
                        {models[modelToUse].map((modelVal, index) => { 
                            if ((Number(modelVal.weight) > 0 )) {
                                const labelValuePair = {
                                    label: modelVal.symbol, 
                                    value: modelVal.weight + '%', 
                                    color: modelVal.color}
                                return (
                                    <LabelValuePairWithColorDot {...labelValuePair} key={index} />
                                )
                            } else {
                                return null
                            }
                           
                        })}
                    </div>
                }
                </div>
            </div>
        )
    }
}