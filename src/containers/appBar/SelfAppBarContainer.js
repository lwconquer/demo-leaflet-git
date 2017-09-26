import { connect } from 'react-redux';

import { fetchToolPaneWidthAction, toggleQueryToolAction, toggleMeasuerToolAction, toggleDataListToolAction } from '../../actions/selfAppBarAction';
import SelfAppBar from '../../Component/AppBar/SelfAppBar';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onMenuIconClicked: () => {
        dispatch(fetchToolPaneWidthAction());
    },
    onQueryToolClicked: () => {
        dispatch(toggleQueryToolAction());
    },
    onMeasureToolClicked: () => {
        dispatch(toggleMeasuerToolAction());
    },
    onDataListToolClicked: () => {
        dispatch(toggleDataListToolAction());
    }
});

const SelfAppBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelfAppBar);

export default SelfAppBarContainer;