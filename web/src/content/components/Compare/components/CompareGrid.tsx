import * as React from 'react'
import Chart from './PieChart';
import Analytics from './Analytics';
import { string } from 'prop-types';

export interface IChartData {
    title: string;
    value: number;
    color: string;
}

interface ICompareGrid {
    title: string;
    children: React.ReactNode,
    data: IChartData[]
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
                <Analytics />

            </div>
        )
    }

}

