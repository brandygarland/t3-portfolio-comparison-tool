import * as React from 'react'
import { IApp } from '../../App'
import CompareGrid from './components/CompareGrid';
import Models from './components/Models/Models';
import ModelInputs from './components/ModelInputs/ModelInputs';

interface ICompare extends IApp {

}

export default class Compare extends React.PureComponent<ICompare> {
    render() {
        return (
            <>
                <CompareGrid
                    title={'Select a Model to Compare'}
                >
                    <>
                        <Models {...this.props} />
                    </>
                </CompareGrid>

                <CompareGrid
                    title={'Construct a Portfolio'}
                >
                    <>
                        <ModelInputs  {...this.props} />
                    </>
                </CompareGrid>
            </>
        )
    }
}