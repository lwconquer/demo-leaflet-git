import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Button, Table, Loader, Segment, Icon, Popup, Dropdown } from 'semantic-ui-react';

import '../../../css/widgetTool.css';


class DataListTool extends React.Component {

    componentDidMount() {
        this.props.initializeControls();
    }

    render() {
        return (
            <Form className='forms'>
                <div className="betweenControl">
                    <Dropdown placeholder='Select Layer Name' value={this.props.selectedLayerName} onChange={(e, data) => this.props.OnLayerNamesChanged(e, data)} fluid selection options={this.props.layerNames} />
                    {this.props.ifDisplayInputLayerNameValidataionMessage && <label style={{ color: 'red' }}>Please select a layer name first.</label>}
                </div>

                <Button color={'green'} onClick={(e, data) => this.props.onExecuteClicked(e, data)}>
                    <Icon name='search' />Execute
                </Button>
            </Form>
        );
    }
}

export default DataListTool;