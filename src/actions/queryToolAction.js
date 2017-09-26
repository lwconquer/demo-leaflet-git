export function populateLayerListCB(layerListOptions) {
    return { type: "QUERYTOOL_POPULATE_LAYERLIST", data: layerListOptions };
}

export function populateQueryFieldsCB(attributesNames) {
    return { type: "QUERYTOOL_POPULATE_QUERYFIELDS", data: attributesNames };
}

export function setSelectedLayerName(selectedLayerName) {
    return { type: "QUERYTOOL_SELECTED_LAYERNAME", data: selectedLayerName };
}


export function setSelectedFieldName(selectedFieldName) {
    return { type: "QUERYTOOL_SELECTED_FIELDNAME", data: selectedFieldName };
}

export function setInputFieldValue(inputFieldValue) {
    return { type: "QUERYTOOL_SET_INPUTFIELDVALUE", data: inputFieldValue };
}


export function setAvailableDataValues(availableDataValue) {
    return { type: "QUERYTOOL_SET_AVAILABLEDATAVALUES", data: availableDataValue };
}

export function zoomToQueryResult(geometry){
    return { type: "QUERYTOOL_ZOOMTO_QUERYRESULT", data: geometry };
}