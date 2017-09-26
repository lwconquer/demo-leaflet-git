
const initialState = {
    headerRow: [],
    tableData: [],
    renderBodyRow: null
};


export default (state = initialState, action) => {
    if (action.type === "DATALISTTOOL_POPULATE_DATATABLE")        
        state = { ...state, headerRow: action.headerRow, tableData: action.tableData, renderBodyRow: action.renderBodyRow };
    
    return state;
};