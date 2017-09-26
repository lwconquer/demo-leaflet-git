import React from 'react';
import { Table } from 'semantic-ui-react';

class DataTable extends React.Component {   
    render() {
        return (
            <Table
                celled
                selectable
                headerRow={this.props.headerRow}
                renderBodyRow={this.props.renderBodyRow}
                tableData={this.props.tableData}
            />
        );
    }
}

export default DataTable;