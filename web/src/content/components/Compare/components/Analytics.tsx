import * as React from 'react' 
import LabelValuePair from './LabelValuePairs/LabelValuePair';

interface IAnalytics {

}

export default class Analytics extends React.PureComponent<IAnalytics> {
    // we will need to have a mapper here that converts the values from the server into label-value pairs 
    render() {
        const analytics = [
            {label: "Allocation Effect by Asset Class", value: ""},
            {label: "Information Coeffient", value: ""},
            {label: "Sharpe Ratio", value: ""},
            {label: "Concentration Analysis", value: ""},
            {label: "Finscore", value: ""},

        ]
        return (
            <div style={{margin: `20px auto`}}>
                {analytics.map((analytic, index) => 
                    <LabelValuePair {...analytic} key={index}/>
                )}
            </div>

        )
    }
}