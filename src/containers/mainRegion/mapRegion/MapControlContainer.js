import { connect } from 'react-redux';

import MapControl from '../../../Component/MainRegion/MapRegion/MapControl';

const mapStateToProps = (state, ownProps) => {    
    return {
        position: state.mapControl.position,        
        layers:state.mapControl.layers,
        zoom: state.mapControl.zoom
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({   
});

const MapControlContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapControl);

export default MapControlContainer;