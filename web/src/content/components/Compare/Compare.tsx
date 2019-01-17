import * as React from 'react'
import { IApp } from '../../App'
import CompareGrid, { IChartData } from './components/CompareGrid';
import Models from './Models';
import ModelInputs from './components/ModelInputs/ModelInputs';
import { models, mapModelToPieChart } from '../../businessLogic/models';
import { colors } from '../../common/colors';

interface ICompare extends IApp {

}

export default class Compare extends React.PureComponent<ICompare> {
    render() {
        let modelData: IChartData[] = [{ title: 'empty', value: 50, color: colors.lightGray}, { title: 'empty', value: 50, color: colors.lightGray}]
        if (this.props.appState.modelToUse !== null ){
            modelData = mapModelToPieChart(models[this.props.appState.modelToUse])
        } 
        let otherData: IChartData[] = [{ title: 'empty', value: 50, color: colors.lightGray}, { title: 'empty', value: 50, color: colors.lightGray}]


        return (
            <>
                <CompareGrid
                    title={'Select a Model to Compare'}
                    data={modelData}
                >
                    <>
                        <Models {...this.props} />
                    </>
                </CompareGrid>

                <CompareGrid
                    title={'Construct a Portfolio'}
                    data={otherData}
                >
                    <>
                        <ModelInputs  {...this.props} />
                    </>
                </CompareGrid>
            </>
        )
    }
}