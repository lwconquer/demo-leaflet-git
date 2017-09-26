
const initialState = {
    layerNames: [],
    selectedLayerName: "",
    ifDisplayInputLayerNameValidataionMessage: false
};


export default (state = initialState, action) => {
    if (action.type === "DATALISTTOOL_POPULATE_LAYERLIST")
        state = { ...state, layerNames: action.data };
    if (action.type === "DATALISTTOOL_SELECTED_LAYERNAME")
        state = { ...state, selectedLayerName: action.data, ifDisplayInputLayerNameValidataionMessage: false };
    if (action.type === "DATALISTTOOL_IFDISPLAY_INPUTLAYERNAMEVALIDATIONMESSAGE")
        state = { ...state, ifDisplayInputLayerNameValidataionMessage: action.data };
    return state;
};