import * as React from 'react'
import Chart from './PieChart';
import Analytics from './Analytics';

interface ICompareGrid {
    title: string;
    children: React.ReactNode,
}

export default class CompareGrid extends React.PureComponent<ICompareGrid> {
    render() {
        return (
            <div className='compare-grid-container'>
                <h3>{this.props.title}</h3>
                <Chart
                    data={[
                        { title: 'One', value: 10, color: '#cb86d9' },
                        { title: 'Two', value: 15, color: '#8777d6' },
                        { title: 'Three', value: 10, color: '#2e70b4' },
                        { title: 'Four', value: 20, color: '#56acdf' },
                        { title: 'Five', value: 20, color: '#53a5a0' },
                        { title: 'Six', value: 20, color: '#5db27b' },
                        { title: 'Seven', value: 20, color: '#dda1ba' },
                    ]}
                />
                {this.props.children}
                <Analytics />

            </div>
        )
    }

}

