import { connect } from 'react-redux';

import DataTable from '../../../Component/MainRegion/BottomRegion/DataTable';

const mapStateToProps = (state, ownProps) => {
    return {
        headerRow: state.dataTable.headerRow,
        tableData: state.dataTable.tableData,
        renderBodyRow: state.dataTable.renderBodyRow
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const DataTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataTable);

export default DataTableContainer;