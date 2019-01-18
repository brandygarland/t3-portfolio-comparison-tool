import { string } from "prop-types";

export const appState:IAppState = {
    inputs: {
        symbolSearch: '',
    },
    modelToUse: null,
    assetList: [
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},

    ],
    positions: [
       {symbol: 'AAPL', value: '10', cusip: '037833100'}
    ],
}

export interface IAppState {

    inputs: InputTypes;
    modelToUse: string;
    assetList: IAsset[];
    positions: IPosition[];

}

export interface IAsset {
    name: string;
}

export interface IPosition {
    symbol: string, 
    value: string, 
    cusip: string
}

export interface InputTypes {
   symbolSearch: string;
}