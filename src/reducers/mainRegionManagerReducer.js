const initialState = {
    toolPaneWidth: 1,
    mainRegionHeight: '99%'
};

export default (state = initialState, action) => {
    if (action.type === "SELFAPPBAR_CHANGE_TOOL_PANE_WIDTH") {
        if (state.toolPaneWidth < 300)
            state = { ...state, toolPaneWidth: 300 };
        else
            state = { ...state, toolPaneWidth: 1, mainRegionHeight: '99%' };
    }


    if (action.type === "SELFAPPBAR_TOGGLE_QUERYTOOL" || action.type === "SELFAPPBAR_TOGGLE_MEASURETOOL" || action.type === "SELFAPPBAR_TOGGLE_DATALISTTOOL") {
        if (state.toolPaneWidth === 301)
            state = { ...state, toolPaneWidth: 300 };
        else
            state = { ...state, toolPaneWidth: 301 };

    }

    if (action.type === "DATALISTTOOL_POPULATE_DATATABLE")
        state = { ...state, mainRegionHeight: '70%' }

    return state;
};