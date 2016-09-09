import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {Tabs, Tab} from 'material-ui/Tabs';

import Songs from './Songs.jsx';
import Remix from './Remix.jsx';

class App extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <Tabs>
                <Tab label="Remix Song">
                    <div>
                        <Songs />
                    </div>
                </Tab>
                <Tab label="Play Song">
                    <div>
                        <Remix />
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
