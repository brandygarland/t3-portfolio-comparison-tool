import * as React from 'react'

interface IHeader {

}

export default class Header extends React.PureComponent <IHeader> {
    render() {
         return (
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button 
                            type='button' 
                            className='navbar-toggle collapsed' 
                            data-toggle='collapse' 
                            data-target='#bs-example-navbar-collapse-1' 
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'/>
                            <span className='icon-bar'/>
                            <span className='icon-bar'/>
                        </button>
                        <a className='navbar-brand' href='/'>TradePMR</a>
                    </div>

                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav'/>
                    <ul className='nav navbar-nav navbar-right'>
                        {/* <li><a href='#'>Sign Up <i className='fas fa-user-plus'></i></a></li> */}
                        <li><a href='/login'>Log In <i className='fas fa-user'/></a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
   
}