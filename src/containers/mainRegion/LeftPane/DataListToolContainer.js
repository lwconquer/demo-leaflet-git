import { connect } from 'react-redux';

import DataListTool from '../../../Component/MainRegion/LeftPane/DataListTool';
import { populateLayerListCB, setSelectedLayerName, populateDataTable, setDisplayInputLayerNameValidataionMessageToTrue } from '../../../actions/dataListToolAction';


const mapStateToProps = (state, ownProps) => {
    return {
        globalState: state,
        layerNames: state.dataListTool.layerNames,
        selectedLayerName: state.dataListTool.selectedLayerName,
        ifDisplayInputLayerNameValidataionMessage: state.dataListTool.ifDisplayInputLayerNameValidataionMessage
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({


    initializeControls: state => {
        let data = state.globalState.mapControl.layers.map(function (x) {
            return { key: x.layerName, value: x.layerName, text: x.layerName };
        });
        dispatch(populateLayerListCB(data));
    },

    OnLayerNamesChanged: (e, selectedData, fromState) => {
        dispatch(setSelectedLayerName(selectedData.value));
    },

    onExecuteClicked: (e, data, state) => {
        const { selectedLayerName, globalState } = state;
        if (!selectedLayerName) {            
            dispatch(setDisplayInputLayerNameValidataionMessageToTrue(true));
            return;
        }
        const selectedLayerInfo = globalState.mapControl.layers.find(e => { return e.layerName === selectedLayerName; });
        const tableData = selectedLayerInfo.features.map(x => x.attribute);
        const headerRow = Object.keys(selectedLayerInfo.features[0].attribute);
        const renderBodyRow = ({ Name, Language, Inspector }) => ({
            key: Name, warining: "apple is warning!",
            cells: [Name, Language, Inspector]
        });


        dispatch(populateDataTable(headerRow, tableData, renderBodyRow));
    }


});



function mergeProps(fromState, fromDispatch, fromParent) {
    //Method 1: by using Object.assign();
    //return Object.assign({}, fromParent, { layerNames: fromState.layerNames},{OnLayerNamesChanged: (e,data)=> fromDispatch.dispatchOnLayerNamesChanged(e, data, fromState.layerNames)});

    //Method 2: by using ...
    return {
        ...fromState, ...fromDispatch, ...fromParent,
        initializeControls: () => fromDispatch.initializeControls(fromState),
        OnLayerNamesChanged: (e, data) => fromDispatch.OnLayerNamesChanged(e, data, fromState),
        OnFieldNamesChanged: (e, data) => fromDispatch.OnFieldNamesChanged(e, data, fromState),
        onExecuteClicked: (e, data) => fromDispatch.onExecuteClicked(e, data, fromState)

    };
}


const DataListToolContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(DataListTool);

export default DataListToolContainer;