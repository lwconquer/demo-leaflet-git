export function populateLayerListCB(layerListOptions) {
    return { type: "DATALISTTOOL_POPULATE_LAYERLIST", data: layerListOptions };
}



export function setSelectedLayerName(selectedLayerName) {
    return { type: "DATALISTTOOL_SELECTED_LAYERNAME", data: selectedLayerName };
}

export function populateDataTable(headerRow, tableData, renderBodyRow) {
    return { type: "DATALISTTOOL_POPULATE_DATATABLE", headerRow: headerRow, tableData: tableData, renderBodyRow: renderBodyRow };
}

export function setDisplayInputLayerNameValidataionMessageToTrue(ifDisplayInputLayerNameValidataionMessage)
{
       return { type: "DATALISTTOOL_IFDISPLAY_INPUTLAYERNAMEVALIDATIONMESSAGE", data: ifDisplayInputLayerNameValidataionMessage };
}