import * as React from 'react'
import { IApp } from '../../App'
import CompareGrid, { IChartData } from './components/CompareGrid'
import Models from './components/Models'
import ModelInputs from './components/ModelInputs/ModelInputs'
import { models, mapModelToPieChart } from '../../businessLogic/models'
import { colors, colorsArray } from '../../common/colors'
import { analyzedPortfolios } from '../../businessLogic/portfolioStats'

interface ICompare extends IApp {

}

export default class Compare extends React.PureComponent<ICompare> {

    render() {
        let modelData: IChartData[] = [
            { title: 'empty', value: 50, color: colors.lightGray}, 
            { title: 'empty', value: 50, color: colors.lightGray}
        ]
        if (this.props.appState.modelToUse !== null ) {
            modelData = mapModelToPieChart(models[this.props.appState.modelToUse])
        } 
        let otherData: IChartData[] = [
            { title: 'empty', value: 50, color: colors.lightGray}, 
            { title: 'empty', value: 50, color: colors.lightGray}
        ]

        if (this.props.appState.positions.length > 0) {
            otherData = []
            this.props.appState.positions.forEach((position, index) => {
                let newChartDatum = {title: position.ticker, color: colorsArray[index], value: Number(position.value)}
                otherData.push(newChartDatum)
            })
            let value = 0

            otherData.map(datum => {
                value += datum.value
            })

            if (value < 100) {
                otherData.push({ title: 'empty', value: (100 - value), color: colors.lightGray})
            }

        }
        return (
            <>
                <CompareGrid
                    title={'Select a Model to Compare'}
                    data={modelData}
                    analytics={analyzedPortfolios[this.props.appState.modelToUse]}
                    message={'Select a model to view analytics.'}
                >
                    <>
                        <Models {...this.props} />
                    </>
                </CompareGrid>

                <CompareGrid
                    title={'Construct a Portfolio'}
                    data={otherData}
                    analytics={this.props.appState.analytics}
                >
                    <>
                        <ModelInputs  {...this.props} />
                    </>
                </CompareGrid>
            </>
        )
    }
}