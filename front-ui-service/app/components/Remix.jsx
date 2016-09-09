import React from 'react';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const style = {
  height: 100,
  width: 100,
  margin: 100,
};

const button_style = {
    margin: 10,
};

class Remix extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img style={{ height: 500, width: 1000 }} src={'./assets/images/graph.jpg'} alt="graph"/>
                </div>
                <Toolbar>
                    <Button style={button_style} label="Play" primary={true} />
                    <Button style={button_style} label="Download" primary={true} />
                </Toolbar>
            </div>
        );
    }
}

export default Remix;
