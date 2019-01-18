import * as React from 'react'
import { IApp } from '../../../../App'
import { colors } from '../../../../common/colors'

interface ISymbolSearchInputs extends IApp {

}

export default class SymbolSearchInputs extends React.PureComponent<ISymbolSearchInputs> {

    chooseSecurity = (id: string) => () => {
        console.log(id)
    } 

    render() {
        const { symbolSearch } = this.props.appState.inputs
        const assetList = [
            {name: 'test', id: '1'},
            {name: 'test', id: '2'},
            {name: 'test', id: '3'},
            {name: 'test', id: '4'},
            {name: 'test', id: '5'},
            {name: 'test', id: '6'},
        ]
        return (
        <div style={{margin: `20px auto 0px auto`}}>

                <i className='fas fa-plus' style={{marginRight: `10px`, marginTop: `8px`, color: colors.lightGray, verticalAlign: `top`}}/>
                <div style={{display: `inline-block`}}>
                    <input 
                        className={'form-control'}
                        id={'symbolSearch'} 
                        value={symbolSearch}
                        onChange={this.props.triggerObservableOnInputChange('symbolSearch', 'model-creation')}
                        style={{width: `200px`, margin:`scroll`}}
                    />
                    {symbolSearch.length > 0 && 
                        <div style={{maxHeight: `180px`, overflowY: `auto`, border: `1px lightgray solid`}}>
                            {assetList.map((asset, index) => 
                                <AssetCard {...asset} key={index} onClick={this.chooseSecurity} />
                            )}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

interface IAssetCard {
    onClick: (id: string) => () => void;
    name: string;
    id: string;
}

const AssetCard = (props: IAssetCard) => {
    const { name, onClick, id } = props
    return (
        <div className='asset-card' onClick={onClick(id)}>
            asset {name}
        </div>
    )
}