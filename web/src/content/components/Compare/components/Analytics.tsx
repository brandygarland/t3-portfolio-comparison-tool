import * as React from 'react' 

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
                    <Analytic {...analytic} key={index}/>
                )}
            </div>

        )
    }
}

interface IAnalytic {
    label: string;
    value: string;
}

const Analytic = (props: IAnalytic) => {
    return (
        <div style={{width: `310px`, margin: `auto`}}>
            <label className={'bold-label'}>{props.label}:</label>
            <label className={'value-label'}>{props.value}</label>
        </div>
    )
}