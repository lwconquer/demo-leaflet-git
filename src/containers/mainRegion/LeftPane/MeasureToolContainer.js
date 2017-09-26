import { connect } from 'react-redux';

import MeasureTool from '../../../Component/MainRegion/LeftPane/MeasureTool';

const mapStateToProps = (state, ownProps) => {    
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({   
    onMeasureToolExecuteClicked:(e)=>{
        //dispatch(fetchToolPaneWidthAction());
    }
});

const MeasureToolContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MeasureTool);

export default MeasureToolContainer;