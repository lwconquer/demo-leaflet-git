import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
// import Settings from 'material-ui/Settings';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import SplitPane from 'react-split-pane';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const styles = {
    title: {
        cursor: 'pointer'
    }
};
class SelfAppBar extends React.Component {
    handleTouchTap() {
        alert('onTouchTap triggered on the title component');
    }

    // handleTouchTap1 =(e) => {
    //     alert('onTouchTap triggered on the title componentkjhjkhjhjhj');
    // }

    render() {
        return (
            <AppBar
                title={<span style={styles.title}>Leaflet GIS Demo Website - BTS Team </span>}
                onTitleTouchTap={this.handleTouchTap}
                iconElementRight={
                    <div >
                        <Link to='/QueryTool'>
                            <IconButton tooltip="Query Tool" onClick={this.props.onQueryToolClicked}>
                                <ActionSearch color='white' />
                            </IconButton>
                        </Link>
                        <Link to='/MeasureTool' style={{display:'none'}}>
                            <IconButton tooltip="Measure Tool" onClick={this.props.onMeasureToolClicked}>
                                <ActionAlarm color='white' />
                            </IconButton>
                        </Link>
                        <Link to='/DataListTool' >
                            <IconButton tooltip="DataList Tool" onClick={this.props.onDataListToolClicked}>
                                <ActionBuild color='white' />                               
                            </IconButton>
                        </Link>
                    </div>}
                iconElementLeft={
                    <div>
                        <IconButton tooltip="widget area" onTouchTap={this.props.onMenuIconClicked}>
                            <ActionMenu color='white' />
                        </IconButton>
                    </div>
                }
            />
        );
    }
}
export default SelfAppBar;