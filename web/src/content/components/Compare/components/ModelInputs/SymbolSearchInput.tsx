import * as React from 'react'
import { IApp } from '../../../../App'
import { colors } from '../../../../common/colors'

interface ISymbolSearchInputs extends IApp {

}

export default class SymbolSearchInputs extends React.PureComponent<ISymbolSearchInputs> {
    render() {
        const { assetList } = this.props.appState
        return (
        <div style={{margin: `20px auto 0px auto`}}>

                <i className='fas fa-plus' style={{marginRight: `10px`, color: colors.lightGray}}/>
                <input 
                    className={'form-control'}
                    id={'symbol-search'} 
                    onChange={this.props.triggerObservableOnInputChange('symbol-search', 'model-creation')}
                    style={{width: `200px`, margin:`auto`, display: `inline-block`}}
                />
                {assetList.map((asset, index) => 
                    <AssetCard {...asset} key={index} />
                )}
            </div>
        )
    }
}

interface IAssetCard {
    name: string;
}

const AssetCard = (props: IAssetCard) => {
    return (
        <div>
            asset {props.name}
        </div>
    )
}