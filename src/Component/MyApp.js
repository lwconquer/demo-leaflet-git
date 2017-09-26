import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplitPane from 'react-split-pane';
//import SelfAppBar from './AppBar/SelfAppBar';

import SelfAppBarContainer from '../containers/appBar/SelfAppBarContainer';


//import MainRegionManager from './MainRegion/MainRegionManager';
import MainRegionManagerContainer from '../containers/mainRegion/MainRegionManagerContainer';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { BrowserRouter as Router, Route, Link,HashRouter  } from 'react-router-dom';
import PropTypes from 'prop-types';


class MyApp extends React.Component {
    render() {
        return (

            <MuiThemeProvider>
                <div>
                    {/* <HashRouter > */}
                        <div >
                            <SelfAppBarContainer />
                            <MainRegionManagerContainer />
                        </div>
                    {/* </HashRouter> */} 
                </div>
            </MuiThemeProvider>

        );
    }
}

export default MyApp;