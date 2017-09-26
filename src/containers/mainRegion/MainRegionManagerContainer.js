import { connect } from 'react-redux';

import MainRegionManager from '../../Component/MainRegion/MainRegionManager';

const mapStateToProps = (state, ownProps) => {    
    return {
        toolPaneWidth: state.mainRegionManager.toolPaneWidth,
        mainRegionHeight:state.mainRegionManager.mainRegionHeight
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({   
});

const MainRegionManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainRegionManager);

export default MainRegionManagerContainer;