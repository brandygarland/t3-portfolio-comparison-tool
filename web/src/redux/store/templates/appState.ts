import { string } from "prop-types";
import { instruments } from "../../../content/businessLogic/instruments"

export const appState:IAppState = {
    inputs: {
        symbolSearch: '',
        chosenInstrument: '',
    },
    modelToUse: null,
    assetList: [
    
    ],
    positions: [],
    instruments: [...instruments]
        
}

export interface IAppState {

    inputs: InputTypes;
    modelToUse: string;
    assetList: IAsset[];
    positions: IPosition[];
    instruments: IInstrument[];
}

export interface IAsset {
    asset_id: number;
    category: string;
    class: string;
    cluster: string;
    currency: string;
    cusip: string;
    isin: string;
    sedol: string;
    error_variance: number;
    exchange: string;
    geography: string;
    industry: string;
    instrument: string;
    name: string;
    simple_cluster: string;
    start_date: number;
    stats: Object;
    ticker: string;

}

export interface IPosition {
    ticker: string; 
    weight: number;
    cusip?: string;
    isin?: string;
    sedol?: string;
}

export interface IInstrument {
    code: string;
    description: string;
}

export interface InputTypes {
   symbolSearch: string; 
   chosenInstrument: string;
}