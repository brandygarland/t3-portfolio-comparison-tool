export const appState: AppStateTypes = {
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    sampleData: null,
    sampleDataError: false,
    isSearching: false,

}

export interface AppStateTypes {
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;
    sampleData: Object[] | null;
    sampleDataError: boolean;
    isSearching: boolean;

}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}