import { instruments } from '../../../content/businessLogic/instruments'
import { mapModelToPositionObject, conservativeModel, moderateModel,
     aggressiveModel, incomeModel, growthModel } from '../../../content/businessLogic/models'

export const appState: IAppState = {
    inputs: {
        symbolSearch: '',
        chosenInstrument: '',
    },
    modelToUse: null,
    assetList: [
    
    ],
    models: {
        conservative: mapModelToPositionObject(conservativeModel),
        moderate: mapModelToPositionObject(moderateModel),
        aggresive: mapModelToPositionObject(aggressiveModel),
        income: mapModelToPositionObject(incomeModel),
        growth: mapModelToPositionObject(growthModel),

    },
    positions: [],
    instruments: [...instruments],
    analytics: null,
        
}

export interface IAppState {

    inputs: InputTypes;
    modelToUse: string;
    assetList: IAsset[];
    models: IModel;
    positions: IPosition[];
    instruments: IInstrument[];
    analytics: IAnalytics;

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

export interface IModel {
    conservative: IPosition[];
    moderate: IPosition[];
    aggresive: IPosition[];
    income: IPosition[];
    growth: IPosition[];
}

export interface IPosition {
    ticker: string; 
    weight: number;
    cusip?: string;
    isin?: string;
    sedol?: string;
    value: number;
    quantity?: number;
}

export interface IInstrument {
    code: string;
    description: string;
}

export interface IAnalytics {
    finscore: number | string;
    sharpe_hyb_fb_20yr: number | string;
    scenario_strong_fb: number | string;
    scenario_normal_fb: number | string;
    scenario_weak_fb: number | string;
    sortino_ratio_hyb_fb: number | string;
    fees_total_expense_ratio_lgdf: number | string;
    scenario_crash2008_hyb_fb: number | string;
    scenario_fedhikes_mild_fb: number | string;
}

export interface InputTypes {
   symbolSearch: string; 
   chosenInstrument: string;
}