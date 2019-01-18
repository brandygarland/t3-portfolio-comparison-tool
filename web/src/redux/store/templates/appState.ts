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

    ]
}

export interface IAppState {

    inputs: InputTypes;
    modelToUse: string;
    assetList: IAsset[]

}

export interface IAsset {
    name: string;
}

export interface InputTypes {
   symbolSearch: string;
}