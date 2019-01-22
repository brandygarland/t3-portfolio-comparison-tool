import * as React from 'react' 
import LabelValuePair from './LabelValuePairs/LabelValuePair';
import { IAnalytics } from '../../../../redux/store/templates/appState';

interface IAnalytic {
    analytics: IAnalytics;
    message: string;
}

export default class Analytics extends React.PureComponent<IAnalytic> {
    // we will need to have a mapper here that converts the values from the server into label-value pairs 

    render() {

        let analytics = []
        
        if (this.props.analytics && this.props.analytics.finscore && this.props.analytics.sharpe_hyb_fb_20yr) {
            analytics.push({label: "Finscore", value: this.props.analytics.finscore.toString()})
            analytics.push({label: "Sharpe Ratio", value: ((this.props.analytics.sharpe_hyb_fb_20yr * 100).toFixed(2)).toString()},)
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