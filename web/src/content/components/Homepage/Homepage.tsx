import * as React from 'react'
import { IApp } from '../../App';

interface IHomepage extends IApp {

}

export default class Homepage extends React.PureComponent<IHomepage> {
    render() {
        return (
            <>
                <div id='homepage-background' className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div id='content'>
                                <img src="./assets/tradePMR.png"/>
                                <h3>Portfolio Comparison Tool</h3>
                                <hr/>
                                <button 
                                    className='btn btn-default btn-lg' 
                                    onClick={this.props.routeToLogIn}>
                                    <i className="fas fa-money-bill"></i> Get Started!
                                </button>
                            </div>
                        </div>
                    </div>	
                </div>
            </>

        )
    }
}