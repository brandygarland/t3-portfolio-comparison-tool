import * as React from 'react'
import { IApp } from '../../../../App'
import { colors } from '../../../../common/colors'
import { IAsset } from '../../../../../redux/store/templates/appState'

interface ISymbolSearchInputs extends IApp {

}

export default class SymbolSearchInputs extends React.PureComponent<ISymbolSearchInputs> {
    render() {
        const { symbolSearch, chosenInstrument } = this.props.appState.inputs
        const assetList = this.props.appState.assetList
        return (
        <div style={{margin: `20px auto 0px auto`}}>

                <i 
                    className='fas fa-plus' 
                    style={{marginRight: `10px`, marginTop: `8px`, color: colors.lightGray, verticalAlign: `top`}}
                />
                <div style={{display: `inline-block`}}>
                    <input 
                        className={'form-control'}
                        id={'symbolSearch'} 
                        value={symbolSearch}
                        onChange={this.props.triggerObservableOnInputChange('symbolSearch', 'model-creation')}
                        style={{width: `200px`, margin: `0`, display: `inline-block`}}
                        placeholder='Search symbols...'
                        disabled={this.props.appState.positions.length >= 15}
                    />
                    <select
                        className={'form-control'}
                        id={'chosenInstrument'} 
                        value={chosenInstrument}
                        onChange={this.props.triggerObservableOnInputChange('chosenInstrument', 'model-creation')}
                        style={{width: `200px`, margin: `0 0 0 10px`, display: `inline-block`, height: `35px`}}
                        disabled={this.props.appState.positions.length >= 15}
                    >
                        {this.props.appState.instruments.map((instrument, index) => 
                            <option key={index} value={instrument.code}>{instrument.description}</option>
                        )}
                    </select>
                    
                    {(assetList.length > 0 && symbolSearch.length > 0) && 
                        <div 
                            style={{
                                maxHeight: `180px`, 
                                overflowY: `auto`, 
                                border: `1px lightgray solid`, 
                                position: `absolute`, 
                                backgroundColor: `white`, 
                                zIndex: 10
                            }}
                        >
                            {assetList.map((asset, index) => 
                                <AssetCard {...asset} key={index} onClick={this.props.chooseAsset} />
                            )}
                        </div>
                    }
                    
                </div>
                
            </div>
        )
    }
}

interface IAssetCard extends IAsset {
    onClick: (asset: IAsset) => () => void
    
}

const AssetCard = (props: IAssetCard) => {
    const { name, onClick, category, cluster, geography, cusip, isin, sedol, ticker } = props
    
    let assetCusipSedolOrIsin = cusip || isin || sedol
    let type = 'CUSIP'
    
    if (!cusip) {
        if (isin) {
            type = 'ISIN'
        }
        if (sedol) {
            type = 'SEDOL'
        }
    }
    let click = onClick(props)
    
    if (assetCusipSedolOrIsin === undefined) {
       return null
    }

    return (
        <div className='asset-card' onClick={click}>
            <span className='asset-span name-span'>{name}</span>
            {ticker && <span className='asset-span ticker-span'>{ticker}</span>}
            {category && <span className='asset-span'>{category} - {cluster}</span>}
            {assetCusipSedolOrIsin && <span className='asset-span'>{geography} - {type}: {assetCusipSedolOrIsin}</span>}

        </div>
    )
}