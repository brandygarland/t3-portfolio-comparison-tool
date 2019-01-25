import * as React from 'react'
import PieChart from 'react-minimal-pie-chart'

interface IPieChart {
    data: {title: string, value: number, color: string}[];

}

export default class Chart extends React.PureComponent<IPieChart> {
    render() {
        return (
            <PieChart
                style={{ height: '150px' }}
                data={this.props.data}
                segmentsStyle={{ transition: 'stroke .3s' }}
                animate={true}
                lineWidth={50}
                totalValue={100}
            />
        )
    }
}