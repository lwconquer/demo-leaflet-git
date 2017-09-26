import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Button, Table, Loader, Segment, Icon, Popup, Dropdown } from 'semantic-ui-react';

import '../../../css/widgetTool.css';

class QueryTool extends React.Component {

    componentDidMount() {
        this.props.initializeControls();
    }

    render() {
        return (
            <Form className='forms'>
                <div>
                    <Dropdown placeholder='Select Layer Name to Query' value={this.props.selectedLayerName} onChange={(e, data) => this.props.OnLayerNamesChanged(e, data)} fluid selection options={this.props.layerNames} className="betweenControl" />
                    {this.props.ifDisplayFieldsCB && <Dropdown placeholder='Select The Field Name' value={this.props.selectedFieldName} onChange={(e, data) => this.props.OnFieldNamesChanged(e, data)} fluid selection options={this.props.attributesNames} className="betweenControl" />}
                    {this.props.ifDisplayFieldValueInput && <Dropdown placeholder='Input The Field Value' value={this.props.FieldValue} onChange={(e, data) => this.props.OnFieldValueChanged(e, data)} search selection options={this.props.availableValues} className="betweenControl" />}
                </div>

                {this.props.ifDisplayExecuteButton && <Button color={'green'} onClick={(e, data) => this.props.onQueryClicked(e, data)}><Icon name='search' />Search</Button>}
            </Form>

        );
    }
}

export default QueryTool;