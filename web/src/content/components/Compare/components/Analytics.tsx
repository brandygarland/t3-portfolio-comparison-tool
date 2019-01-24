import * as React from 'react' 
import LabelValuePair from './LabelValuePairs/LabelValuePair'
import { IAnalytics } from '../../../../redux/store/templates/appState'

interface IAnalytic {
    analytics: IAnalytics;
    message: string;
}

const formatAsPercent = (value): string => {
    let returnValue = ''
    if (value && value !== '--') {
        returnValue = (value * 100).toFixed(2).toString() + '%'
    } else {
        returnValue = '--'
    }
    return returnValue
}

const formatAsBasis = (value): string => {
    let returnValue = ''
    if (value && value !== '--') {
        returnValue = (value * 10000).toFixed(2).toString()
    } else {
        returnValue = '--'
    }
    return returnValue
}

const formatAsString = (value): string => {
    let returnValue = ''
    if (value && value !== '--') {
        returnValue = value.toString()
    } else {
        returnValue = '--'
    }
    return returnValue
}

export default class Analytics extends React.PureComponent<IAnalytic> {
    render() {

        let analytics = []
        if (this.props.analytics) {
            const {finscore, sharpe_hyb_fb_20yr, scenario_strong_fb, scenario_normal_fb, 
                scenario_weak_fb, sortino_ratio_hyb_fb, fees_total_expense_ratio_lgdf,
                scenario_crash2008_hyb_fb, scenario_fedhikes_mild_fb
            } = this.props.analytics
            analytics.push(
                {
                    label: 'Finscore', 
                    value: formatAsString(finscore || '--')
                }
            )
            analytics.push(
                {
                    label: 'Sharpe Ratio', 
                    value: formatAsPercent(sharpe_hyb_fb_20yr || '--')
                }
            )
            analytics.push(
                {
                    label: 'Average Bull Market', 
                    value: formatAsPercent(scenario_strong_fb || '--')
                }
            )
            analytics.push(
                {
                    label: 'Average Normal Market', 
                    value: formatAsPercent(scenario_normal_fb  || '--')
                }
            )
            analytics.push(
                {
                    label: 'Average Bear Market', 
                    value: formatAsPercent(scenario_weak_fb || '--')
                }
            )
            analytics.push(
                {
                    label: 'Sortino Ratio', 
                    value: formatAsPercent(sortino_ratio_hyb_fb || '--')
                }
            )
            analytics.push(
                {
                    label: 'Historical Crash 2008 Return', 
                    value: formatAsPercent(scenario_crash2008_hyb_fb || '--')
                }
            )
            analytics.push(
                {
                    label: 'Scenario Fed Hike Mild', 
                    value: formatAsPercent(scenario_fedhikes_mild_fb || '--')
                }
            )
            analytics.push(
                {
                    label: 'Fees-Total Expense Ratio', 
                    value: formatAsBasis(fees_total_expense_ratio_lgdf || '--')
                }
            )
        }
        
        return (
            <div style={{margin: `20px auto`, position: `absolute`, width: `100%`, bottom: `10px`}}>
                {analytics.map((analytic, index) => 
                    <LabelValuePair {...analytic} key={index}/>
                )}
                
            </div>

        )
    }
}