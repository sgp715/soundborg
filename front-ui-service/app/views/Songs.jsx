import React from  'react';

import min from 'minified';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Button from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Dropzone from 'react-dropzone';

const list_style = {
    margin: 50,
};

const upload_style = {
    margin: 20,
    width: 20,
    height: 10,
};

const remix_style = {
    margin: 20,
};

class Songs extends React.Component {

    render () {
        return (
            <div>
                <List style={list_style}>
                    <Subheader > <font size="10" > Files </font> </Subheader>
                    <ListItem primaryText="Sample File" rightIconButton={<Button label="Delete" />} />
                    <ListItem primaryText="Sample File" rightIconButton={<Button label="Delete" />} />
                </List>
                <Toolbar>
                    <Dropzone style={upload_style}>
                        <Button label="upload"/>
                    </Dropzone >
                    <Button style={remix_style} label="Remix!" />
                </Toolbar>
            </div>
        );
    }

}

export default Songs;
