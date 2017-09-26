import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import SplitPane from 'react-split-pane';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Route, Switch } from 'react-router-dom';

import MapControlContainer from '../../containers/mainRegion/mapRegion/MapControlContainer';
import QueryToolContainer from '../../containers/mainRegion/LeftPane/QueryToolContainer';
import MeasureToolContainer from '../../containers/mainRegion/LeftPane/MeasureToolContainer';
import DataListToolContainer from '../../containers/mainRegion/LeftPane/DataListToolContainer';
import DataTableContainer from '../../containers/mainRegion/bottomRegion/DataTableContainer';

class MainRegionManager extends React.Component {
    render() {
        return (
            <SplitPane split="horizontal" minSize={0} size={this.props.mainRegionHeight}>
                <SplitPane split="vertical" minSize={0} size={this.props.toolPaneWidth}>
                    <div>
                        <Route exact path="/QueryTool" component={QueryToolContainer} />
                        <Route path="/MeasureTool" component={MeasureToolContainer} />
                        <Route path="/DataListTool" component={DataListToolContainer} />
                    </div>
                    <div>
                        <MapControlContainer />
                    </div>
                </SplitPane>
                <div>
                    <DataTableContainer />
                </div>
            </SplitPane>

        );
    }
}

MainRegionManager.defaultProps = {
    toolPaneWidth: 1
};

MainRegionManager.propTypes = {
    toolPaneWidth: PropTypes.number
};
export default MainRegionManager;