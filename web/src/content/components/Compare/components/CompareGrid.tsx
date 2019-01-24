import * as React from 'react'
import Chart from './PieChart';
import Analytics from './Analytics';
import { IAnalytics } from '../../../../redux/store/templates/appState';

export interface IChartData {
    title: string;
    value: number;
    color: string;
}

interface ICompareGrid {
    title: string;
    children: React.ReactNode,
    data: IChartData[]
    analytics?: IAnalytics;
    message?: string;
}

export default class CompareGrid extends React.PureComponent<ICompareGrid> {
    render() {
        return (
            <div className='compare-grid-container'>
                <h3>{this.props.title}</h3>
                <Chart
                    data={this.props.data}
                />
                {this.props.children}
                <Analytics 
                    analytics={this.props.analytics}
                    message={this.props.message}
                />

            </div>
        )
    }

}

