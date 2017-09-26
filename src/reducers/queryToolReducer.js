const initialState = {
    layerNames: [],
    attributesNames: [],
    availableValues: [],
    selectedLayerName: "",
    selectedFieldName: "",
    FieldValue: "",
    ifDisplayFieldsCB: false,
    ifDisplayFieldValueInput: false,
    ifDisplayExecuteButton: false
};


export default (state = initialState, action) => {
    if (action.type === "QUERYTOOL_POPULATE_LAYERLIST")
        state = { ...state, layerNames: action.data };
    if (action.type === "QUERYTOOL_POPULATE_QUERYFIELDS")
        state = { ...state, attributesNames: action.data };
    if (action.type === "QUERYTOOL_SELECTED_LAYERNAME")
        state = { ...state, selectedLayerName: action.data, ifDisplayFieldsCB: true };
    if (action.type === "QUERYTOOL_SELECTED_FIELDNAME")
        state = { ...state, selectedFieldName: action.data, ifDisplayFieldValueInput: true };
    if (action.type === "QUERYTOOL_SET_INPUTFIELDVALUE") 
        state = { ...state, FieldValue: action.data, ifDisplayExecuteButton: true };    
    if (action.type === "QUERYTOOL_SET_AVAILABLEDATAVALUES") {
        state = { ...state, availableValues: action.data };
    }
    return state;
};