import React from  'react';

import min from 'minified';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Button from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Dropzone from 'react-dropzone';
import Request from './Request.jsx'

const list_style = {
    margin: 50,
};

const button_style = {
    margin: 10,
};

class Songs extends Request {

    constructor(props) {
        super(props);
        this.state = { files: [] };
        this.addFile = this.addFile.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
    }

    addFile(newFiles) {
        // var res = this.get('http://jsonplaceholder.typicode.com/posts/1');

        this.setState({ files: this.state.files.concat(newFiles) });
    }

    deleteFile(file) {
        var filename = file.name;

        var newFiles = [];
        for (var i = 0; i < this.state.files.length; i++ ){
            var currentFilename = this.state.files[i].name;
            if (filename == currentFilename) {
                continue;
            }
            newFiles.push(file);
        }

        this.setState({ files: newFiles });

    }

    render () {
        return (
            <div>
                <List style={list_style}>
                    { this.state.files.map((file) => <ListItem key={file.name}
                                                               primaryText={file.name}
                                                               rightIconButton={<Button onClick={() => this.deleteFile(file)}
                                                                                        label="Delete"
                                                                                        secondary={true} />} /> )}
                </List>
                <Toolbar>
                    <Dropzone onDrop={this.addFile} style={button_style}>
                        <Button label="upload" primary={true} />
                    </Dropzone >
                    <Button style={button_style} label="Remix" primary={true} />
                </Toolbar>
            </div>
        );
    }

}

export default Songs;
