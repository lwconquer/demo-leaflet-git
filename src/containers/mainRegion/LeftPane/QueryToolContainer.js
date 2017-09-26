import { connect } from 'react-redux';
import { map } from 'lodash';

import QueryTool from '../../../Component/MainRegion/LeftPane/QueryTool';
import { populateLayerListCB, populateQueryFieldsCB, setSelectedLayerName, setSelectedFieldName, setInputFieldValue, setAvailableDataValues,zoomToQueryResult } from '../../../actions/queryToolAction';


const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        layerNames: state.queryTool.layerNames,
        attributesNames: state.queryTool.attributesNames,
        availableValues: state.queryTool.availableValues,
        selectedLayerName: state.queryTool.selectedLayerName,
        selectedFieldName: state.queryTool.selectedFieldName,
        FieldValue: state.queryTool.FieldValue,
        ifDisplayFieldsCB:state.queryTool.ifDisplayFieldsCB,
        ifDisplayFieldValueInput:state.queryTool.ifDisplayFieldValueInput,
        ifDisplayExecuteButton:state.queryTool.ifDisplayExecuteButton
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    initializeControls: (state) => {
        let data = state.state.mapControl.layers.map(function (x) {
            return { key: x.layerName, value: x.layerName, text: x.layerName };
        });
        dispatch(populateLayerListCB(data));
    },

    OnLayerNamesChanged: (e, selectedData, state) => {
        let selectedLyrInfo = state.state.mapControl.layers.find((e) => { return e.layerName === selectedData.value; });
        let attributesData = selectedLyrInfo.queryToolFields.map((e) => { return { key: e, value: e, text: e }; });
        dispatch(populateQueryFieldsCB(attributesData));
        dispatch(setSelectedLayerName(selectedData.value));
    },

    OnFieldNamesChanged: (e, selectedData, state) => {
        let selectedLyrInfo = state.state.mapControl.layers.find((e) => { return e.layerName === state.selectedLayerName; });
        let availableValues = selectedLyrInfo.features.map(function (x) {
            return { key: x.attribute[selectedData.value], value: x.attribute[selectedData.value], text: x.attribute[selectedData.value] };
        });
        dispatch(setAvailableDataValues(availableValues));
        dispatch(setSelectedFieldName(selectedData.value));
    },

    OnFieldValueChanged: (e, selectedData) => {
        dispatch(setInputFieldValue(selectedData.value));
    },

    onQueryClicked: (e, data, state) => {
        let geometry = null;
        let selectedLyrInfo = state.state.mapControl.layers.find((e) => { return e.layerName === state.selectedLayerName; });
        let availableValues = selectedLyrInfo.features.find(function (x) {

            if (x.attribute[state.selectedFieldName] === state.FieldValue)
                geometry=x.position;            
        });

        dispatch(zoomToQueryResult(geometry));
    }

});

function mergeProps(fromState, fromDispatch, fromParent) {
    //Method 1: by using Object.assign();
    //return Object.assign({}, fromParent, { layerNames: fromState.layerNames},{OnLayerNamesChanged: (e,data)=> fromDispatch.dispatchOnLayerNamesChanged(e, data, fromState.layerNames)});

    //Method 2: by using ...
    return {
        ...fromParent, ...fromState, ...fromDispatch,
        initializeControls: () => fromDispatch.initializeControls(fromState),
        OnLayerNamesChanged: (e, data) => fromDispatch.OnLayerNamesChanged(e, data, fromState),
        OnFieldNamesChanged: (e, data) => fromDispatch.OnFieldNamesChanged(e, data, fromState),
        onQueryClicked: (e, data) => fromDispatch.onQueryClicked(e, data, fromState)
    };
}


const QueryToolContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(QueryTool);

export default QueryToolContainer;