import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConnectedApp from './content/ConnectedApp'
import store from './redux/store/store'
import history from './redux/store/history'
import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import 'date-input-polyfill'

ReactDOM.render(
    <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/" component={ConnectedApp}/>
                </ConnectedRouter>
            </Provider>,

    document.getElementById('root'))
registerServiceWorker()