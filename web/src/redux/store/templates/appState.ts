export const appState: AppStateTypes = {
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    modelToUse: null,
    assetList: [
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},

    ]
}

export interface AppStateTypes {

    inputs: InputTypes;
    modelToUse: string;
    assetList: {name: string; }[]

}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;

}