import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Button, Table, Loader, Segment, Icon, Popup, Checkbox, Image } from 'semantic-ui-react';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';

import '../../../css/widgetTool.css';


class MeasureTool extends React.Component {

    render() {
        return (
            <div>
                <Form className='forms'>
                    <Form.Field>
                        <Checkbox label='Observation Point' defaultChecked />
                        <IconButton tooltip="Measure Tool">
                            <ActionAlarm color='black' />
                        </IconButton>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='Other Point' defaultChecked />
                        <Image src={require('../../../img/download.jpg')} alt="not found" size="mini" inline="true"/>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default MeasureTool;