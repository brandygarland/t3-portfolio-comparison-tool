export const appState: AppStateTypes = {
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    modelToUse: null,
}

export interface AppStateTypes {

    inputs: InputTypes;
    modelToUse: string;

}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}